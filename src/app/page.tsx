'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MarqueeSection } from '@/components/MarqueeSection';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if profile image exists
  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch('/images/profile/profile.png');
        if (response.ok) {
          setProfileImageLoaded(true);
        }
      } catch (error) {
        console.log('Profile image not found');
      }
    };
    checkImage();
  }, []);

  const tools = [
    { name: 'Jira', percentage: '98%', img: '/images/tools/Jira.png'},
    { name: 'Power BI', percentage: '92%', img: '/images/tools/Frame.png'},
    { name: 'Figma', percentage: '85%', img: '/images/tools/figma.png' },
    { name: 'Canva', percentage: '85%', img: '/images/tools/canva.png' },
    { name: 'VS Code', percentage: '85%', img: '/images/tools/vscode.png' },
    { name: 'Tableau', percentage: '85%', img: '/images/tools/tableau.png' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-6 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>✦</span>
                <span>Hello There!</span>
                <span>✦</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                I'm <span className="text-[#f8b135]">Rashini Lakshika</span>
              </h1>
              <h2 className="text-3xl text-gray-700 mb-6">UI/UX Designer & Data Analyst</h2>
              <p className="text-gray-600 mb-8 text-lg">
                I design digital experiences and analyze data to turn ideas into solutions.
              </p>
              <Link href="/projects">
                <motion.button
                  className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Design <span>→</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Content - Profile Image with Floating Cards */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main Profile Image */}
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden bg-[#2e4f3e] border-4 border-[#2e4f3e] flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Profile Image Container */}
                  <div className="w-80 h-80 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                    {profileImageLoaded ? (
                      <img 
                        src="/images/profile/profile.png"
                        alt="Rashini Lakshika - UI/UX Designer & Data Analyst"
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center 20%' }}
                        onError={() => setProfileImageLoaded(false)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#f8b135] to-[#e9af3e] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">RL</span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Floating Card 1 - UI/UX Design */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#2e4f3e] text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h3 className="font-bold mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-300">
                    Creating beautiful, functional interfaces for exceptional user experiences
                  </p>
                </motion.div>

                {/* Floating Card 2 - Data Analysis */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#f8b135] text-[#2e4f3e] p-6 rounded-2xl shadow-xl max-w-[200px]"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <h3 className="font-bold mb-2">Data Analysis</h3>
                  <p className="text-sm">
                    Transforming complex data into actionable insights
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* About Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with Skills */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-[#f8b135] to-[#e9af3e] rounded-full flex items-center justify-center p-4">
                  <div className="w-full h-full bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                    {profileImageLoaded ? (
                      <img 
                        src="/images/profile/hand image.png"
                        alt="Rashini Lakshika - About Me"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#f8b135] to-[#e9af3e] flex items-center justify-center">
                        <span className="text-white text-lg font-bold text-center px-2">Rashini<br/>Lakshika</span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Skill Tags */}
                <motion.div
                  className="absolute top-10 -left-10 bg-[#f8b135] text-[#2e4f3e] px-4 py-2 rounded-full font-medium shadow-lg"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  UI Design
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-10 bg-white text-[#2e4f3e] px-4 py-2 rounded-full font-medium shadow-lg"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  UX Research
                </motion.div>
                <motion.div
                  className="absolute bottom-10 -left-5 bg-[#3d6455] text-white px-4 py-2 rounded-full font-medium shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  Data Analysis
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f8b135] mb-4 block">— About Me</span>
              <h2 className="text-4xl font-bold mb-6">
                Who is <span className="text-[#f8b135]">Rashini Lakshika</span>?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Hi, I'm Rashini Lakshika! My profession lies in both Analytics and UI/UX design and also data has become my passion. Currently working as a trainee at GSS Colombo, and growing my skills every day.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '02+', label: 'Years of Experience' },
                  { number: '01+', label: 'Design Companies' },
                  { number: '10+', label: 'Projects Completed' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-[#f8b135]">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link href="/documents/Rashini Lakshika CV.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV <span>↓</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f8b135] mb-2 block">— My Favorite Tools</span>
            <h2 className="text-4xl font-bold text-[#2e4f3e]">My Creative & Analytical Tools</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ y: -10 }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#f8b135] flex items-center justify-center relative overflow-hidden group-hover:border-[#2e4f3e] transition-colors bg-white">
                  <img 
                    src={tool.img} 
                    alt={tool.name}
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const textFallback = document.createElement('div');
                      textFallback.className = 'text-[#2e4f3e] font-bold text-lg';
                      textFallback.textContent = tool.name.substring(0, 3);
                      e.currentTarget.parentElement?.appendChild(textFallback);
                    }}
                  />
                </div>
                <div className="text-2xl font-bold text-[#2e4f3e]">{tool.percentage}</div>
                <div className="text-gray-600">{tool.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 text-gray-700/5 text-9xl font-bold flex items-center justify-center">
          Academic and Professional Journey
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f8b135] mb-2 block">— Education</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 text-[#2e4f3e] p-4 md:p-6 rounded-2xl w-full md:w-11/12 mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#f8b135] rounded-full flex items-center justify-center">
                  🎓
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {[
                  { year: '2024-2026', title: 'Easton Campus', subtitle: 'BIT' },
                  { year: '2023-2024', title: 'University of Colombo', subtitle: 'Foundation' },
                  { year: '2011-2022', title: "Newstead Girls' College", subtitle: 'O/L - 7As 2B' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#f8b135] pl-4"
                  >
                    <div className="text-sm text-gray-600">{item.year}</div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-gray-600">{item.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 text-[#2e4f3e] p-4 md:p-6 rounded-2xl w-full md:w-11/12 mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#f8b135] rounded-full flex items-center justify-center">
                  💼
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {[
                  { year: '2026-Now', title: 'GSS Colombo', subtitle: 'Data Analyst (NOW)' },
                  { year: '2025-2025 May', title: 'GSS Colombo', subtitle: 'Trainee Data Analyst' },
                  { year: '2024-2024', title: 'GSS Colombo', subtitle: 'QAT' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#f8b135] pl-4"
                  >
                    <div className="text-sm text-gray-600">{item.year}</div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-gray-600">{item.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-[#2e4f3e]">
            Let's Bringing <span className="text-[#f8b135]">Imagination</span> to <span className="text-[#f8b135]">Life</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">Ready to start your next project?</p>
          <Link href="/contact">
            <motion.button
              className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact <span>→</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Skills Marquee */}
      <div className="bg-[#f8b135] py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {['Mobile App Design', 'Website Design', 'UI/UX Design', 'Dashboard', 'Wireframe', 'Prototyping', 'Mobile App Design', 'Website Design', 'UI/UX Design', 'Dashboard', 'Wireframe', 'Prototyping'].map((item, index) => (
            <div key={index} className="inline-block mx-6 text-[#2e4f3e] font-medium text-xl">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
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
              <p className="text-gray-300 mb-8">Feel free to say hi or drop me a message anytime!</p>

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
                    img: '/images/contact/LinkedIn.png' 
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
                      <h4 className="font-bold text-[#f8b135]">{item.title}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#3d6455] p-8 rounded-2xl"
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
                    <div>
                      <label htmlFor="name" className="block text-[#f8b135] mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#f8b135] mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#f8b135] mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#f8b135] mb-2">Your Message/Comments</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#2e4f3e] border border-gray-600 focus:border-[#f8b135] focus:outline-none text-white resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    disabled={isSubmitting}
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