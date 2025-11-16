'use client';

import { motion } from 'framer-motion';
import { MarqueeSection } from '@/components/MarqueeSection';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    {
      title: 'UI Design',
      img: '/images/skills/UI.png',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
    },
    {
      title: 'UX Research',
      img: '/images/skills/UX.png',
      description: 'Conducting user research to understand needs and behaviors for better design decisions.',
    },
    {
      title: 'Data Analysis',
      img: '/images/skills/Data.png',
      description: 'Analyzing and interpreting complex data sets to extract meaningful insights.',
    },
    {
      title: 'Dashboard Design',
      img: '/images/skills/Dashboard.png',
      description: 'Creating intuitive data visualization interfaces that make complex information accessible.',
    },
    {
      title: 'Prototyping',
      img: '/images/skills/Prototyping.png',
      description: 'Building interactive prototypes to test and refine user experiences before development.',
    },
    {
      title: 'Data Visualization',
      img: '/images/skills/Data Visualation.png',
      description: 'Transforming complex data into clear, compelling visual representations.',
    },
  ];

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
            About
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Home</span>
            <span>/</span>
            <span>About Me</span>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f8b135] mb-2 block">— MY VISION & MISSION</span>
            <h2 className="text-4xl font-bold text-[#2e4f3e] mb-2">My Vision and Mission:</h2>
            <p className="text-2xl text-gray-600">MY Happiness</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-[#f8b135] to-[#e9af3e] p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2e4f3e] rounded-full flex items-center justify-center">
                  <img 
                    src="/images/skills/vision.png" 
                    alt="Vision"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2e4f3e]">Our Vision</h3>
              </div>
              <p className="text-[#2e4f3e]">
                My vision is to become a skilled data analyst and creative designer who connects data and design. I want to create useful and beautiful solutions that help people and make a positive impact.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#f8b135] to-[#e9af3e] p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2e4f3e] rounded-full flex items-center justify-center">
                  <img 
                    src="/images/skills/mission.png" 
                    alt="Mission"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2e4f3e]">Our Mission</h3>
              </div>
              <p className="text-[#2e4f3e]">
                My mission is to turn data and design into meaningful insights and experiences. I aim to analyze information clearly and present it through creative, user-friendly designs that help people make better decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f8b135] mb-2 block">— MY SKILLS</span>
            <h2 className="text-4xl font-bold">
              Professional <span className="text-[#f8b135]">Skills</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white text-[#2e4f3e] p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-20 h-20 bg-[#fff7e6] rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden">
                  <img 
                    src={skill.img} 
                    alt={skill.title}
                    className="w-12 h-12 object-contain"
                    
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{skill.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-[#f8b135] to-[#e9af3e] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-gray-600 text-center text-sm">{skill.description}</p>
              </motion.div>
            ))}
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
            Let's Bringing <span className="text-[#f8b135]">Imagination</span> to{' '}
            <span className="text-[#f8b135]">Life</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">Ready to start your next project?</p>
          <motion.a
            href="/contact"
            className="bg-[#f8b135] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e9af3e] transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact <span>→</span>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}