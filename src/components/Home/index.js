import './index.scss';
import {Link} from "react-router-dom";
import LogoTitle from '../../assets/images/logo-s.png';
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ['o', 'h', 's', 'e', 'n']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
      <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span><span className={`${letterClass} _14`}>'m</span><img src={LogoTitle} alt='developer'/><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>Fullstack Developer / PHP, JavaScript Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman' active/>
      </>
    );
}

export default Home