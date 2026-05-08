import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Mind', href: '#about' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#030014]/50 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold text-white tracking-widest flex items-center gap-2">
          AKASH<span className="text-purple-500">•</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
        >
          <div className="flex flex-col py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors text-2xl font-display uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
