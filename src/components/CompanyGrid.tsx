import { motion } from 'motion/react';
import { companies } from '../types';
import CompanyCard from './CompanyCard';

export default function CompanyGrid() {
  return (
    <section id="companies" className="py-32 px-6 bg-synque-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-synque-green/40 mb-4 block">Our Ecosystem</span>
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.85] mb-8">
                A Collective of <br />
                <span className="italic">Specialized</span> <span className="not-italic font-sans font-black tracking-tighter">Entities.</span>
              </h2>
            </motion.div>
            <p className="text-xl text-synque-green/60 max-w-xl leading-relaxed">
              We don't just build companies; we architect interconnected systems that amplify each other's potential.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-synque-green/20" />
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Scroll to explore</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(400px,auto)]">
          {companies.map((company, i) => (
            <CompanyCard 
              key={company.id} 
              company={company} 
              index={i} 
              isLarge={i === 0 || i === 3} // Make the 1st and 4th cards larger for asymmetry
            />
          ))}
          
          {/* A unique "Join Us" card with a different style */}
          <motion.div
            id="ventures"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-synque-green p-12 text-synque-light flex flex-col justify-between group cursor-pointer lg:col-span-1"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:rotate-90 transition-transform duration-500">
                <span className="text-2xl font-light">+</span>
              </div>
              <h3 className="text-4xl font-serif italic mb-4 leading-tight">Your vision, <br />our synergy.</h3>
              <p className="text-sm opacity-60 max-w-[200px]">
                We're always looking for the next unique entity to join the Synque Group.
              </p>
            </div>
            
            <div className="relative z-10 mt-12">
              <button className="w-full py-4 bg-synque-accent text-synque-green rounded-2xl font-bold text-sm hover:bg-white transition-colors">
                Apply to Join
              </button>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

