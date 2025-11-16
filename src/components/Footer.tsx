'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mldapalr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
      } else {
        alert('There was an error subscribing. Please try again.');
      }
    } catch (error) {
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#2e4f3e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#f8b135] flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="font-semibold text-xl">Rashini</span>
            </div>
            <p className="text-gray-300 mb-4">
              I'm always happy to connect. Let's stay in touch and create something nice together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rashini-lakshika-76640b320' },
                { icon: Instagram, href: 'https://www.instagram.com/lakshika_rashini/' },
                { icon: Github, href: 'https://github.com/Rashini862' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3d6455] flex items-center justify-center hover:bg-[#f8b135] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#f8b135] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>+94787111329</li>
              <li>rashilakshika86@gmail.com</li>
              <li>No 145, Kongodamulla, Katana</li>
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Get the latest information</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-green-600/20 border border-green-400 rounded-lg"
              >
                <p className="text-green-400 text-sm text-center">
                  ✅ Thank you for subscribing!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 focus:outline-none focus:border-[#f8b135] text-white placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  className="px-6 py-2 bg-[#3d6455] rounded-r-full hover:bg-[#f8b135] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    '→'
                  )}
                </motion.button>
              </form>
            )}
            
            <p className="text-xs text-gray-400 mt-2 text-center">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            Copyright 2026 <span className="text-[#f8b135]">Rashini</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-gray-300">
            <Link href="#" className="hover:text-[#f8b135] transition-colors">
              User Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-[#f8b135] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}