import { motion } from 'motion/react';

export function EducationSection() {
  return (
    <section id="education" className="py-40 relative bg-[#030014] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 relative z-10">
        
        {/* Education */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white tracking-tight mb-6">Education.</h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border-t border-white/10 pt-8"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl font-display font-light text-white group-hover:text-gray-300 transition-colors">B.Tech in Computer Science</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Expected 2028</span>
              </div>
              <p className="text-gray-400 font-light mb-4">Specialization in AI/ML</p>
              <p className="text-gray-500 text-sm font-light uppercase tracking-widest">
                Institute of Engineering and Management<br/>Kolkata
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border-t border-white/10 pt-8"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl font-display font-light text-white group-hover:text-gray-300 transition-colors">CBSE AISSCE</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">May 2024</span>
              </div>
              <p className="text-gray-400 font-light mb-4 text-xl">70%</p>
              <p className="text-gray-500 text-sm font-light uppercase tracking-widest">
                Kalyani Central Model School<br/>Kalyani
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border-t border-white/10 pt-8 border-b pb-8"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl font-display font-light text-white group-hover:text-gray-300 transition-colors">CISCE ICSE</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">May 2022</span>
              </div>
              <p className="text-gray-400 font-light mb-4 text-xl">85%</p>
              <p className="text-gray-500 text-sm font-light uppercase tracking-widest">
                Julien Day School<br/>Kalyani
              </p>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white tracking-tight mb-6">Distinctions.</h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 pt-8 pb-8"
            >
              <h3 className="text-2xl font-display font-light text-white mb-2 group-hover:text-gray-300 transition-colors md:pr-20">AWS Certified Cloud Practitioner</h3>
              <p className="text-gray-400 font-light mb-4">Amazon Web Services</p>
              <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.2em] font-medium border border-white/10 rounded-full px-3 py-1 inline-block">Issued 2025</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 pt-8 border-b pb-8"
            >
              <h3 className="text-2xl font-display font-light text-white mb-2 group-hover:text-gray-300 transition-colors md:pr-20">Google Data Analytics Professional</h3>
              <p className="text-gray-400 font-light mb-4">Coursera</p>
              <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.2em] font-medium border border-white/10 rounded-full px-3 py-1 inline-block">Issued 2025</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
