import React from 'react'
import './Contact.css'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

function Contact() {
    return (
        <section className="c-wrapper py-24">
            <div className="innerWidth px-8 c-container flex flex-col lg:flex-row items-center justify-between">

                {/* Left Side: Text */}
                <div className="c-left flex-1 flex flex-col items-start">
                    <div className="text-wrapper mb-8 w-full">
                        <div className="line bg-white/20"></div>
                        <div className="text-container">
                            <span className="c-text">Get in Touch</span>
                        </div>
                        <div className="line right bg-white/20"></div>
                    </div>

                    <h2 className="c-title">Let's work together</h2>
                    <p className="c-desc">
                        Have a project in mind or just want to say hi?
                        Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Right Side: Form */}
                <div className="c-right flex flex-1 justify-center w-full">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" className="form-textarea" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <Button className="w-full flex items-center justify-center gap-2 mt-2" size="lg">
                            Send Message <Send size={18} />
                        </Button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
