import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import ServiceCheckbox2 from './ServiceCheckbox2';

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

const ContactForm2 = () => {
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
            className="flex-1 w-full max-w-xl mx-auto lg:mx-0 bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r bg-black"></div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-sans">
                Ready to get started?
            </h3>

            {/* Status Alerts */}
            <AnimatePresence>
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-xl bg-black border border-green-200 flex items-start gap-3"
                    >
                        <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                        <div>
                            <h4 className="text-green-800 font-semibold text-sm">Message sent successfully!</h4>
                            <p className="text-green-700 text-sm mt-1">I will get back to you within 2 hours.</p>
                        </div>
                    </motion.div>
                )}
                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                    >
                        <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
                        <div>
                            <h4 className="text-red-800 font-semibold text-sm">Oops! Something went wrong.</h4>
                            <p className="text-red-700 text-sm mt-1">Please try again later or reach out directly.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}
                <div className="space-y-2 relative">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200'
                            }`}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-1">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2 relative pt-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200'
                            }`}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-1">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Services Selection */}
                <div className="space-y-3 relative pt-2">
                    <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
                        What are you interested in?
                        {errors.services && (
                            <span className="text-red-500 text-xs font-medium">Selected required</span>
                        )}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <div className="space-y-2 relative pt-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                        {...register('message')}
                        id="message"
                        placeholder="Tell me about your project, goals, and timeline..."
                        className={`w-full min-h-[120px] bg-slate-50 border px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-y ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200'
                            }`}
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-1">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a1a1a] hover:bg-black text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] mt-4 shadow-lg shadow-black/20"
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

export default ContactForm2;
