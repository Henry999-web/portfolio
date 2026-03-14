import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Twitter, Mail, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo2 = () => {
    return (
        <div className="flex-1 flex flex-col items-start w-full pr-0 lg:pr-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8 w-full"
            >
                <div className="flex-1 h-[1px] bg-black"></div>
                <span className="text-sm md:text-base text-black font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                    GET IN TOUCH
                </span>
                <div className="flex-1 h-[1px] bg-black"></div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text"
            >
                Let's build something great together.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed"
            >
                Have a project in mind or just want to explore possibilities?
                Our team typically responds within 2 hours.
            </motion.p>

            {/* Chat With Us Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full bg-[#111] border border-[#333] rounded-2xl p-6 shadow-xl"
            >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <MessageSquare size={20} className="text-white" />
                    Chat With Us
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 py-3 px-4 rounded-xl transition-all duration-300 font-medium"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                    <a
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 px-4 rounded-xl transition-all duration-300 font-medium"
                    >
                        <Twitter size={20} />
                        Twitter
                    </a>
                </div>

                <div className="flex items-center justify-between border-t border-[#333] pt-6 flex-wrap gap-4">
                    <a
                        href="mailto:contact@yourdomain.com"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <Mail size={18} />
                        contact@yourdomain.com
                    </a>

                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactInfo2;
