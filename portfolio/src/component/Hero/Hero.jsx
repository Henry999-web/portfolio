import React from 'react'
import heroImage from '../../image/hero.png'
import { Button } from '@/components/ui/button'
import './Hero.css'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className='innerWidth paddings flexCenter hero-container'>
                <div className='hero-left'>
                    <p className='animate-slide-left'>Hi There, I am</p>
                    <h1 className='animate-slide-left delay-100'>Chukwuemeka Henry, <br />Full Stack Web Developer</h1>
                    <p className='animate-slide-left delay-200'>As a passionate web developer, I am dedicated to creating innovative and user-friendly websites that enhance user experience and deliver exceptional results. My expertise in modern web technologies allows me to build dynamic and responsive applications that meet the needs of both users and businesses.</p>
                    <Button className='btn animate-fade-in delay-300' variant='default'>Contact Me</Button>
                </div>
                <div className='hero-right'>
                    <div className='hero-image'>
                        <div className='white-blur-circle animate-scale-in'></div>
                        <img className='grayscale animate-slide-right delay-200' src={heroImage} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;