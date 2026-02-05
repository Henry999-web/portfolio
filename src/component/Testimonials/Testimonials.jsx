import React from 'react'
import './Testimonials.css'
import { Quote } from 'lucide-react'

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            content: "The attention to detail and creative solutions provided were outstanding. Delivered exactly what we needed, on time and with exceptional quality.",
            initials: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Startup Founder",
            content: "A true professional who understands both code and design. Transformed our rough ideas into a polished, user-friendly product that our customers love.",
            initials: "MC"
        },
        {
            name: "Emily Davis",
            role: "Marketing Director",
            content: "Working with Henry was a breeze. Great communication, technical expertise, and a finalized website that has significantly improved our conversion rates.",
            initials: "ED"
        }
    ];

    return (
        <section className="t-wrapper">
            <div className="innerWidth px-8 py-24 flexCenter p-container t-container flex-col">
                <div className="text-wrapper w-full flex items-center gap-5 relative">
                    <div className="line flex-grow h-px bg-gradient-to-r from-transparent via-[#333] to-[#333]"></div>
                    <div className="text-container px-4">
                        <span className="t-text">Testimonials</span>
                    </div>
                    <div className="line right flex-grow h-px bg-gradient-to-r from-[#333] via-[#333] to-transparent"></div>
                </div>

                <div className="testimonial-grid mt-10">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>
                            <Quote className="text-zinc-600 mb-4 h-8 w-8" />
                            <p className="testimonial-content">"{item.content}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {item.initials}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{item.name}</span>
                                    <span className="author-role">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
