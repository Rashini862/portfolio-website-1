'use client';

import { motion } from 'framer-motion';
import { MarqueeSection } from '@/components/MarqueeSection';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['All', 'UI Design', 'UX/UI Design', 'Website Design', 'Creative Design', 'Dashboard'];

  const projects = [
    {
      title: 'Restaurant Website Design',
      tags: ['UI Design', 'Website Design', 'Prototype'],
      description: 'A modern, responsive restaurant website showcasing the menu, featured dishes, and online reservations for a smooth dining experience.',
      image: 'https://ext.same-assets.com/2414015930/3899793190.jpeg',
      categories: ['UI Design', 'Website Design'],
    },
    {
      title: 'Modern Furniture Website',
      tags: ['Website Design', 'UX/UI Design', 'Prototype'],
      description: 'A stylish and responsive furniture website featuring modern designs, product showcases, and easy navigation for a smooth shopping experience.',
      image: 'https://ext.same-assets.com/2414015930/648400395.jpeg',
      categories: ['UX/UI Design', 'Website Design'],
    },
    {
      title: 'Analytics Dashboard',
      tags: ['Dashboard', 'UI Design', 'Data Visualization'],
      description: 'Created an intuitive analytics dashboard for business intelligence. Focused on presenting complex data in an easily digestible format with interactive charts and filters.',
      image: 'https://ext.same-assets.com/2414015930/1916382938.png',
      categories: ['Dashboard', 'UI Design'],
    },
    {
      title: 'Corporate Website',
      tags: ['Website Design', 'UX/UI Design', 'Brand Identity'],
      description: 'Developed a modern corporate website with a focus on brand consistency and user engagement. Implemented responsive design and optimized for performance and accessibility.',
      image: 'https://ext.same-assets.com/2414015930/207030036.png',
      categories: ['Website Design', 'UX/UI Design'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project =>
        project.categories.some(cat => cat.toLowerCase() === activeFilter.toLowerCase())
      );

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
            Projects
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Home</span>
            <span>/</span>
            <span>Projects</span>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Projects Section */}
      <section className="py-20 bg-[#2e4f3e] text-white px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f8b135] mb-2 block">— MY PORTFOLIO</span>
            <h2 className="text-4xl font-bold">
              My Latest <span className="text-[#f8b135]">Projects</span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.toLowerCase()
                    ? 'bg-[#f8b135] text-white'
                    : 'bg-white text-[#2e4f3e] hover:bg-[#f8b135] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-[#2e4f3e]">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#fff7e6] text-[#f8b135] rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
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
