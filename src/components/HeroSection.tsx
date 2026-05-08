import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { ParticlesSphere } from './ParticlesSphere';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ParticlesSphere style={{ width: '100%', height: '100%' }} />
      </div>
      
      <motion.div style={{ y: y1, opacity }} className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col items-center text-center mt-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-colors duration-500 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>
          <span className="text-xs tracking-[0.2em] font-medium text-white/80 uppercase">Available for work</span>
        </motion.div>

        <motion.div
          className="relative mix-blend-screen"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 100, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.85] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-transparent tracking-tighter drop-shadow-2xl"
          >
            AKASH
            <br />
            DAS
          </motion.h1>
          <div className="absolute -inset-x-40 inset-y-0 bg-purple-600/30 blur-[150px] z-[-1] pointer-events-none mix-blend-screen"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl font-light text-gray-400 mb-12 max-w-2xl mt-12 leading-relaxed tracking-wide"
        >
          <span className="text-white font-medium">AI/ML Engineer</span> crafting intelligent ecosystems and digital experiences that transcend the ordinary.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <a href="#projects" className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
            <span className="relative z-10 tracking-widest text-sm uppercase">Explore Universe</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="group relative px-8 py-4 rounded-full bg-transparent hover:bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium flex items-center justify-center space-x-3 transition-all hover:border-white/40">
            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            <span className="tracking-widest text-sm uppercase">Resume</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-white transition-colors cursor-pointer group z-20"
      >
        <span className="text-[10px] tracking-[0.4em] font-medium mb-4 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-white origin-top"
            animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
