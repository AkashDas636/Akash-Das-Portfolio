import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-40 relative bg-[#030014] overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 tracking-tight">Timeline.</h2>
          <div className="w-12 h-[1px] bg-white/30 mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 md:pl-0 md:border-l-0">
          {/* Animated Timeline Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div 
              className="w-full bg-white"
              style={{ height: lineHeight }}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 relative md:w-1/2 md:pr-16 text-left md:text-right"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-37px] md:auto md:right-[-4px] top-6 w-2 h-2 rounded-full bg-white z-10">
            </div>

            <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h3 className="text-2xl font-display font-light text-white">Academic AI/ML Project</h3>
                <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">June 2025 - Present</span>
              </div>
              
              <h4 className="text-lg text-gray-200 font-light mb-2 flex items-center">
                Customer Feedback Analyzer Tool
              </h4>
              <p className="text-xs text-gray-500 mb-8 uppercase tracking-widest">Kolkata, India</p>
              
              <ul className="space-y-4 text-gray-400 list-none p-0 text-base leading-relaxed font-light">
                <li className="flex items-start group/item">
                  <span className="text-white/30 mr-4 mt-1">—</span>
                  <span className="group-hover/item:text-gray-200 transition-colors">Built NLP pipeline to aggregate reviews, surveys, support tickets, and social media into a unified analytics system.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-white/30 mr-4 mt-1">—</span>
                  <span className="group-hover/item:text-gray-200 transition-colors">Implemented sentiment classification using TF-IDF and LSTM models achieving 88% accuracy.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-white/30 mr-4 mt-1">—</span>
                  <span className="group-hover/item:text-gray-200 transition-colors">Applied topic modeling (LDA) to extract recurring customer themes and product issues.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-white/30 mr-4 mt-1">—</span>
                  <span className="group-hover/item:text-gray-200 transition-colors">Developed role-based dashboards with real-time alerts to accelerate response time by 40%.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
