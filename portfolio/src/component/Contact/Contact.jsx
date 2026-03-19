import React from 'react';
import Header from '../Header/Header'
import './Contact.css'; // Keep existing CSS just in case any root styles are there
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
        <Header />
        <section className="c-wrapper">
            <div className="innerWidth c-inner">
                {/* Left Side: Contact Information & Chat */}
                <ContactInfo />

                {/* Right Side: Form Component */}
                <ContactForm />
            </div>
        </section>
        </>
    );
}

export default Contact;
