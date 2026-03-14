import React from 'react';
import './Contact.css'; // Keep existing CSS just in case any root styles are there
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section className="c-wrapper">

            {/* Background elements to add depth */}
            <div className="c-bg-shape c-bg-indigo"></div>
            <div className="c-bg-shape c-bg-purple"></div>

            <div className="innerWidth c-inner">
                {/* Left Side: Contact Information & Chat */}
                <ContactInfo />

                {/* Right Side: Form Component */}
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;
