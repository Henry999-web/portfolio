import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Twitter, Mail, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="ci-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-wrapper ci-text-wrapper"
            >
                <div className="line ci-line"></div>
                <div className="text-container">
                    <span className="ci-small-text">
                        Get in Touch
                    </span>
                </div>
                <div className="line right ci-line"></div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="ci-heading"
            >
                Let's build something great together.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="ci-desc"
            >
                Have a project in mind or just want to explore possibilities?
                Our team typically responds within 2 hours.
            </motion.p>

            {/* Chat With Us Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="ci-chat-box"
            >
                <h3 className="ci-chat-title">
                    <MessageSquare size={20} className="text-white" />
                    Chat With Us
                </h3>

                <div className="ci-social-links">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noreferrer"
                        className="ci-social-btn ci-social-whatsapp"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                    <a
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        rel="noreferrer"
                        className="ci-social-btn ci-social-twitter"
                    >
                        <Twitter size={20} />
                        Twitter
                    </a>
                </div>

                <div className="ci-footer">
                    <a
                        href="mailto:contact@yourdomain.com"
                        className="ci-email-link"
                    >
                        <Mail size={18} />
                        contact@yourdomain.com
                    </a>

                    <div className="ci-icon-links">
                        <a href="#" className="ci-icon-btn">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="ci-icon-btn">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactInfo;
