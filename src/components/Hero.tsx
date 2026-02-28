import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-synque-accent text-synque-green text-xs font-bold tracking-widest uppercase rounded-full mb-6"
            >
              The Synque Ecosystem
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] mb-8 text-balance">
              Synergy in <span className="not-italic font-sans font-bold tracking-tighter">Diversity.</span>
            </h1>
            <p className="text-xl text-synque-green/70 max-w-lg mb-10 leading-relaxed">
              Synque Group is a collective of specialized entities working in harmony to solve complex problems through technology, creativity, and capital.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 bg-synque-green text-synque-light rounded-full font-medium flex items-center gap-2 group hover:gap-4 transition-all"
                aria-label="Explore our portfolio of companies"
              >
                Explore Portfolio <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button 
                className="px-8 py-4 border border-synque-green/20 rounded-full font-medium hover:bg-synque-green/5 transition-all"
                aria-label="Learn more about our mission"
              >
                Our Mission
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/synque-hero/1200/1500" 
                alt="Synque Group" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-synque-green/40 to-transparent" />
            </div>
            
            {/* Decorative elements inspired by the reference */}
            <svg className="absolute -top-10 -left-10 w-32 h-32 text-synque-green/20" viewBox="0 0 100 100">
              <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="90" cy="50" r="3" fill="currentColor" />
            </svg>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-[200px]"
            >
              <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Global Reach</p>
              <p className="text-2xl font-bold">24,548</p>
              <p className="text-xs opacity-70">Active connections across 45 countries.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-synque-accent/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-synque-green/5 blur-[100px] rounded-full" />
    </section>
  );
}
