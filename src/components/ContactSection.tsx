import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <footer id="contact" className="py-40 relative bg-[#030014] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 w-full"
        >
          <h2 className="text-[10vw] md:text-[8vw] font-display font-light text-white leading-none tracking-tighter mb-8">
            Let's <span className="font-bold text-gray-400">Connect.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to build something extraordinary? My inbox is always open for new opportunities, collaborations, or a simple chat.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 w-full"
        >
          <a href="mailto:akash632006d@gmail.com" className="group relative flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-500">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.03] group-hover:scale-110 transition-all duration-500">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xl font-light tracking-wide">akash632006d@gmail.com</span>
            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-2"></div>
          </a>
          
          <div className="group relative flex flex-col items-center text-gray-400">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.01]">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xl font-light tracking-wide">Kolkata, India</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full border-t border-white/10 pt-12 mt-auto flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase mb-8 md:mb-0">
            © {new Date().getFullYear()} Akash Das.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://github.com/AkashDas636" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akash-das632" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase mt-8 md:mt-0 hidden md:block">
            Designed with Intent
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
