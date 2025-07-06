'use client';
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { IoChevronForward } from 'react-icons/io5';
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting,] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Validation
    //     if (!formData.firstName || !formData.email || !formData.phone || !formData.service) {
    //         alert('Please fill in all required fields.');
    //         return;
    //     }

    //     // Email validation
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(formData.email)) {
    //         alert('Please enter a valid email address.');
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     // Simulate API call
    //     try {
    //         // Replace with your actual API call
    //         await new Promise(resolve => setTimeout(resolve, 2000));

    //         alert('Thank you for your message! We will get back to you within 24 hours.');
    //         setFormData({
    //             firstName: '',
    //             email: '',
    //             phone: '',
    //             service: '',
    //             message: ''
    //         });
    //     } catch (error) {
    //         alert('Something went wrong. Please try again.');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Address',
            info: 'info@earthlinkgroup.com'
        },
        {
            icon: Phone,
            title: 'Phone Number',
            info: '+250 788447599'
        },
        {
            icon: MapPin,
            title: 'Our Address',
            info: 'CHIC Building-Kigali, 1st Floor\nE046A2, Kigali'
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <HeroSection>
                <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
                    Contact us
                </h1>
                <div className='flex gap-3 items-center text-white border-[1.4px] border-white rounded-[6px] w-fit py-2 px-4 mt-[16px]'>
                    <a href='/' className='block text-white'>Home</a>
                    <IoChevronForward className='block text-white' />
                    <a href='/contact-us' className='block text-white'>Contact us</a>
                </div>
            </HeroSection>
            <section className=" mt-[30px]  min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="bg-white rounded-2xl p-8 lg:p-12">
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, ease: "anticipate" }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <h1 className=" text-[40px] font-light text-gray-900">
                                    Let&apos;s Expand Your
                                </h1>
                                <h1>
                                    <span className="text-[#1986C3] text-[40px] font-semibold"> Business Together</span>
                                </h1>
                                <p className="text-[18px] text-[#687588] font-[400] pt-6 leading-relaxed">
                                    Connect with our global expansion experts and transform your
                                    international business strategy
                                </p>
                            </motion.div>

                            <motion.form
                                className="space-y-6"
                                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, ease: "anticipate", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="First Name"
                                            required
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@company.com"
                                            required
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+1 (555) 123-4567"
                                            required
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="market-entry">Market Entry Strategy</option>
                                            <option value="business-setup">Business Setup</option>
                                            <option value="compliance">Regulatory Compliance</option>
                                            <option value="partnerships">Strategic Partnerships</option>
                                            <option value="consultation">General Consultation</option>
                                        </select>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        placeholder="Tell us about your business expansion goals and how we can help you succeed globally..."
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300 resize-vertical"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(34,197,94,0.15)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Sending...' : 'SUBMIT'}
                                </motion.button>
                            </motion.form>
                        </div>

                        <div className="space-y-6 lg:pt-12">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#314AFF08]/5 rounded-sm p-6 hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-[20px] font-semibold text-gray-900 mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-[16px] whitespace-pre-line">
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}