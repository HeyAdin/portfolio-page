import React from 'react'
import profileImg from '../../assets/profileImg1.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './home.css';
export const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Hello, <span className='myName'>My Name Is</span>
                </p>

                <h1 className="home__title text-cs">
                    <span>ADIN</span> AHMAD
                </h1>

                <p className="home__job" >
                    <span className='text-cs'>I am a</span> <b>Full-Stack Developer</b>
                </p>


                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>
                </div>

                <p className="home__text">
                    From Bangalore, India. I have hands on experience in Web Development. I love building projects that solves real life problems.
                </p>

                <p className="home__data home__data-one">
                    <span className="text-lg">2 <span className='plus'>+</span></span>
                    <span className="text-sm text-cs">
                        Completed <span>Projects</span>
                    </span>
                </p>


                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />

                <div className="home__socials">
                    <a href="" className="home__social-link">
                        <FaTwitter />
                    </a>

                    <a href="" className="home__social-link">
                        <FaInstagram />
                    </a>

                    <a href="" className="home__social-link">
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className="home__buttons">
                    <a href="" className="btn text-cs">Resume</a>

                    <a href="" className="hero__link text-cs">My Skills</a>
                </div>
            </div>
        </section>
    )
}
