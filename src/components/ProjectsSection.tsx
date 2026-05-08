import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import { ParticlesSphere } from './ParticlesSphere';

const projects = [
  {
    title: "Customer Feedback Analyzer",
    description: "Aggregates reviews, surveys, support tickets, and social media into one pipeline, using NLP and sentiment analysis to surface key themes and issues. Delivering role-specific dashboards and alerts speeds responses, improves cross-team collaboration, and drives smarter product and service decisions.",
    tags: ["NLP", "TF-IDF", "LSTM", "Python", "Dashboards"],
    links: { github: "#" },
    featured: true,
    color: "from-purple-500/20",
    useFramerSphere: true
  },
];

export function ProjectsSection() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-40 relative bg-[#030014] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 tracking-tight">Selected <br/><span className="font-bold">Works.</span></h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </div>
          <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
            A curated collection of projects where intelligent engineering meets rigorous design.
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef} 
      className="relative group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 rounded-3xl pointer-events-none z-10 -m-8 p-8" />
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative z-20`}>
        
        {/* Abstract "Image" area */}
        <motion.div 
          style={{ y }}
          className="w-full lg:w-[55%] aspect-[4/3] bg-[#08041a] border border-white/5 overflow-hidden flex justify-center items-center relative rounded-xl"
        >
          {project.useFramerSphere ? (
            <div className="absolute inset-x-0 inset-y-0 w-full h-[120%] -top-[10%] opacity-90 group-hover:opacity-100 transition-opacity duration-1000 scale-[1.2] group-hover:scale-[1.25] pointer-events-auto">
               <ParticlesSphere style={{ width: '100%', height: '100%' }} />
            </div>
          ) : project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"></div>
              <div className={`absolute -inset-x-20 -inset-y-20 bg-gradient-to-br ${project.color} to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000 mix-blend-screen mix-blend-screen`}></div>
              <span className="text-[120px] font-display font-black text-white/5 select-none transition-transform duration-1000 group-hover:scale-110 tracking-tighter">0{index + 1}</span>
            </>
          )}
        </motion.div>
        
        {/* Content area */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">Case Study</span>
            <h3 className="text-4xl lg:text-5xl font-display font-light text-white leading-[1.1] mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-white transition-all duration-500">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-sm font-light px-4 py-1.5 bg-white/[0.03] text-gray-300 rounded-full border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors uppercase tracking-widest text-xs font-medium group/link">
              <span>View Live</span>
              <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
            {project.links.github && (
              <a href={project.links.github} className="flex items-center space-x-2 text-gray-400 border-b border-transparent pb-1 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium">
                <span>Source Code</span>
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
