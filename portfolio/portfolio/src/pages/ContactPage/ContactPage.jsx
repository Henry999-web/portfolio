import React from 'react';
import './Contact2.css'; // Keep existing CSS just in case any root styles are there
import ContactInfo2 from '../../component/Contact/ContactInfo';
import ContactForm2 from '../../component/Contact/ContactForm';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

function ContactPage() {
    return (
        <div className="cp-wrapper">
            <Header />
            <section className="innerWidth pt-32 pb-24 flex-1 flex items-center text-sans relative overflow-hidden text-white w-full">

                <div className="innerWidth px-6 md:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 relative z-10 w-full">
                    <ContactInfo2 />
                    <ContactForm2 />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;
