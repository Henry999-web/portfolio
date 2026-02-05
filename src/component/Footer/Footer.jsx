import React from 'react'
import './Footer.css'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
    return (
        <section className="f-wrapper">
            <div className="innerWidth px-8 f-container">
                <div className="f-left">
                    <span className="f-logo">CHUKWUEMEKA HENRY</span>
                    <p className="f-desc">
                        Full Stack Web Developer dedicated to creating innovative and user-friendly web experiences.
                    </p>
                </div>

                <div className="f-right">
                    <span className="f-title">Connect with me</span>
                    <div className="f-socials">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="f-icon">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="f-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="f-icon">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:email@example.com" className="f-icon">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="innerWidth px-8 f-bottom">
                <span>&copy; {new Date().getFullYear()} Chukwuemeka Henry. All rights reserved.</span>
                <span>Made with React & Tailwind CSS</span>
            </div>
        </section>
    )
}

export default Footer
