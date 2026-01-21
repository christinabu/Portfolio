"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
  {
    year: "OCT 2024 - MAR 2025",
    title: "Support Executive (UK/US Operations)",
    org: "Amazon, Kochi, India",
    description: "Resolved complex customer issues for UK and US markets, ensuring high satisfaction rates while managing high-volume inquiries.",
    type: "work",
  },
  {
    year: "AUG 2024 - MAR 2025",
    title: "MEARN Full Stack Web Developer (Intern)",
    org: "Luminar TechnoLab, Kochi, India",
    description: "Trained through a 7-month intensive MEARN stack program, developing real-world full-stack web applications with React.js and modern JavaScript.",
    type: "work",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor of Technology",
    org: "Amal Jyothi College of Engineering",
    description: "Graduated with a specialization in Computer Science and Engineering. Developed a solid foundation in programming, data structures, and analytical problem-solving..",
    type: "education",
  },
  {
    year: "2018 - 2020",
    title: "Science",
    org: "LFPS Kollamula",
    description: "Higher Secondary in Science with Computer Science. Early exposure to programming concepts which sparked my initial interest in tech.",
    type: "education",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-20 bg-black min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="journey">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
            My <span className="text-neon-blue">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-poppins">
            From writing my first "Hello World" to building complex applications.
            Here is a glimpse into my professional evolution.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue/20 via-neon-blue/50 to-neon-blue/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-1/2" />

      {/* Point on Line */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(252,0,0,0.5)]">
        <div className="absolute inset-0 bg-neon-blue blur-sm opacity-70" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
          <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} mb-2`}>
            <span className="text-xs text-neon-blue font-mono border border-neon-blue/30 px-2 py-1 rounded-full bg-neon-blue/10 mb-2 w-fit">
              {item.year}
            </span>
            <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-neon-blue transition-colors">
              {item.title}
            </h3>
          </div>

          <p className="text-sm text-gray-300 mb-4 font-medium font-poppins uppercase tracking-wider">
            {item.org}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed font-poppins">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
