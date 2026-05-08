import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, Code2, Database, Layout } from 'lucide-react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Bot className="w-6 h-6 text-white" />,
    skills: ["TensorFlow", "PyTorch", "NLP", "LSTM", "TF-IDF", "Topic Modeling", "Predictive Modeling"]
  },
  {
    title: "Languages & Core",
    icon: <Code2 className="w-6 h-6 text-white" />,
    skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Data Science & Tools",
    icon: <Database className="w-6 h-6 text-white" />,
    skills: ["Pandas", "NumPy", "Matlab", "Jupyter", "Colab", "Git"]
  },
  {
    title: "Soft Skills",
    icon: <Layout className="w-6 h-6 text-white" />,
    skills: ["Leadership", "Problem Solving", "Time Management", "Communication"]
  }
];

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-40 relative overflow-hidden bg-[#030014]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-20%] w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            style={{ y, opacity }}
            className="lg:col-span-5 space-y-12 text-xl text-gray-400 leading-relaxed font-light mt-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-10 tracking-tight leading-[1.1]">
              Inside the <br/><span className="font-bold">Mind.</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
            
            <p>
              I am an aspiring AI/ML Engineer pursuing my B.Tech in Computer Science with a specialization in AI and ML at <span className="text-white font-medium">IEM, Kolkata</span>.
            </p>
            <p className="border-l border-white/20 pl-8 text-white text-3xl font-display leading-[1.3] font-light">
              Architecting intelligent systems by day, designing digital experiences by night.
            </p>
            <p>
              I bridge the gap between raw data and digital experiences, turning complex problems into smart, usable technology. Whether it's crafting NLP pipelines or training deep learning models, I'm always chasing the next breakthrough.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:mt-24"
          >
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10"
              >
                <div className="flex flex-col space-y-6 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 ease-out">
                    {category.icon}
                  </div>
                  <h3 className="text-xl text-white font-light tracking-wide">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-full text-xs font-light text-gray-300 tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
