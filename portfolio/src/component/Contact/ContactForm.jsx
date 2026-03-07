import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import ServiceCheckbox from './ServiceCheckbox';
import './ContactForm.css';

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    services: z.array(z.string()).min(1, 'Please select at least one service'),
});

const SERVICE_OPTIONS = [
    { id: 'web-dev', label: 'Website development' },
    { id: 'seo', label: 'SEO optimization' },
    { id: 'ux', label: 'UX design' },
    { id: 'maintenance', label: 'Website Maintenance' },
    { id: 'other', label: 'Other' }
];

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, inlineErrors = errors, isSubmitting },
        reset
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            services: []
        }
    });

    const selectedServices = watch('services') || [];

    const toggleService = (serviceId) => {
        const currentServices = [...selectedServices];
        if (currentServices.includes(serviceId)) {
            setValue('services', currentServices.filter(id => id !== serviceId), { shouldValidate: true });
        } else {
            setValue('services', [...currentServices, serviceId], { shouldValidate: true });
        }
    };

    const onSubmit = async (data) => {
        setSubmitStatus(null);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form data submitted:', data);

            // To plug in Getform, use:
            // await axios.post("YOUR_GETFORM_ENDPOINT", data);

            setSubmitStatus('success');
            reset();

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cf-container"
        >
            {/* Subtle top accent line */}
            <div className="cf-accent-line"></div>

            <h3 className="cf-title">
                Ready to get started?
            </h3>

            {/* Status Alerts */}
            <AnimatePresence>
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="cf-alert cf-alert-success"
                    >
                        <CheckCircle className="cf-alert-icon" size={20} />
                        <div>
                            <h4 className="cf-alert-title">Message sent successfully!</h4>
                            <p className="cf-alert-desc">I will get back to you within 2 hours.</p>
                        </div>
                    </motion.div>
                )}
                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="cf-alert cf-alert-error"
                    >
                        <AlertCircle className="cf-alert-icon" size={20} />
                        <div>
                            <h4 className="cf-alert-title">Oops! Something went wrong.</h4>
                            <p className="cf-alert-desc">Please try again later or reach out directly.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="cf-form">

                {/* Name */}
                <div className="cf-form-group">
                    <label htmlFor="name" className="cf-label">Full Name</label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={`cf-input ${errors.name ? 'cf-input-error' : ''}`}
                    />
                    {errors.name && (
                        <span className="cf-error-text">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className="cf-form-group cf-pt-2">
                    <label htmlFor="email" className="cf-label">Email Address</label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className={`cf-input ${errors.email ? 'cf-input-error' : ''}`}
                    />
                    {errors.email && (
                        <span className="cf-error-text">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Services Selection */}
                <div className="cf-form-group cf-pt-2">
                    <label className="cf-label cf-label-flex">
                        <span>What are you interested in?</span>
                        {errors.services && (
                            <span className="cf-error-text-inline">Selected required</span>
                        )}
                    </label>
                    <div className="cf-services-grid">
                        {SERVICE_OPTIONS.map((service) => (
                            <ServiceCheckbox
                                key={service.id}
                                id={service.id}
                                label={service.label}
                                isSelected={selectedServices.includes(service.id)}
                                onChange={toggleService}
                            />
                        ))}
                    </div>
                </div>

                {/* Message */}
                <div className="cf-form-group cf-pt-2">
                    <label htmlFor="message" className="cf-label">Message</label>
                    <textarea
                        {...register('message')}
                        id="message"
                        placeholder="Tell me about your project, goals, and timeline..."
                        className={`cf-textarea ${errors.message ? 'cf-input-error' : ''}`}
                    ></textarea>
                    {errors.message && (
                        <span className="cf-error-text">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cf-submit-btn"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
