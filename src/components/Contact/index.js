import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = message => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(refForm.current);

    emailjs
      .sendForm(
        'service_o1k3ucf',
        'template_y6h121r',
        refForm.current,
        'goerRtxklu7HZJbaH'
      )
      .then(() => {
        alert('Message sent successfully!')
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert(`Faild to send the message, please try again! ${error.text}`);
      })
  }

  return (
    <>
      <div className='container contact-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            I'm interested in freelancing.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" autoComplete={true} required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" autoComplete={true} required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder="Subject" autoComplete={true} required />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input className='flat-button' type='submit' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default Contact