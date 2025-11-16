'use client';

import { motion } from 'framer-motion';
import { MarqueeSection } from '@/components/MarqueeSection';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzlnbnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-4 text-[#2e4f3e]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Home</span>
            <span>/</span>
            <span>Contact Me</span>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Contact Form Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-4 md:px-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f8b135] mb-4 block">— Contact Us</span>
              <h2 className="text-4xl font-bold mb-4">
                Let's <span className="text-[#f8b135]">Talk</span> for
              </h2>
              <p className="text-gray-300 mb-8 text-lg">Feel free to say hi or drop me a message anytime!</p>

              <div className="space-y-6">
                {[
                  { 
                    title: 'Call Me', 
                    value: '+94 78 7111329', 
                    img: '/images/contact/Call.png' 
                  },
                  { 
                    title: 'Email Me', 
                    value: 'rashilakshika86@gmail.com', 
                    img: '/images/contact/Email.png' 
                  },
                  { 
                    title: 'LinkedIn', 
                    value: 'rashini-lakshika', 
                    img: '/images/contact/Linkedin.png' 
                  },
                  { 
                    title: 'Location', 
                    value: 'No.145 Church Road, Negombo, Sri Lanka', 
                    img: '/images/contact/Location.png' 
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-[#f8b135] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#f8b135] text-lg">{item.title}</h4>
                      <p className="text-gray-300 text-base">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#3d6455] p-6 md:p-8 rounded-2xl"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#f8b135] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f8b135] mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for your message. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-[#f8b135] mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white transition-all placeholder-gray-400"
                        required
                        disabled={isSubmitting}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-[#f8b135] mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white transition-all placeholder-gray-400"
                        required
                        disabled={isSubmitting}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="phone" className="block text-[#f8b135] mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white transition-all placeholder-gray-400"
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-[#f8b135] mb-2 font-medium">Your Message/Comments</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white resize-none transition-all placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    disabled={isSubmitting}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send <span>→</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}