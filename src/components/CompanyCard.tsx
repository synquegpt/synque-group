import { motion } from 'motion/react';
import { Company } from '../types';
import * as Icons from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  index: number;
  key?: string | number;
  isLarge?: boolean;
}

export default function CompanyCard({ company, index, isLarge }: CompanyCardProps) {
  // @ts-ignore - Dynamic icon access
  const Icon = Icons[company.icon] || Icons.HelpCircle;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-synque-green/5 shadow-sm hover:shadow-2xl transition-all duration-700 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={company.image} 
          alt={`${company.name} office and environment`} 
          className="w-full h-full object-cover opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
          style={{ backgroundColor: company.color }}
        />
      </div>

      <div className="relative z-10 h-full p-10 flex flex-col">
        <div className="flex justify-between items-start mb-12">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
            style={{ backgroundColor: company.color }}
          >
            <Icon size={32} />
          </motion.div>
          
          <div className="text-right">
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 mb-1">
              Division
            </span>
            <span className="block text-xs font-mono font-medium opacity-60">
              0{index + 1}
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="mb-6">
            <span 
              className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${company.color}15`, color: company.color }}
            >
              {company.category}
            </span>
            <h3 className={`font-serif italic leading-none mb-4 group-hover:translate-x-2 transition-transform duration-500 ${
              isLarge ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'
            }`}>
              {company.name.split(' ')[1]} <span className="not-italic font-sans font-black tracking-tighter block text-synque-green">{company.name.split(' ')[0]}</span>
            </h3>
          </div>

          <p className={`text-synque-green/60 leading-relaxed mb-8 max-w-sm group-hover:text-synque-green transition-colors duration-500 ${
            isLarge ? 'text-lg' : 'text-sm'
          }`}>
            {company.description}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-synque-green/5">
            <button 
              className="flex items-center gap-3 text-sm font-bold group/btn"
              aria-label={`Learn more about ${company.name}`}
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Explore Entity</span>
                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-synque-green">Explore Entity</span>
              </span>
              <div className="w-8 h-8 rounded-full border border-synque-green/10 flex items-center justify-center group-hover/btn:bg-synque-green group-hover/btn:text-white transition-all">
                <Icons.ArrowRight size={14} />
              </div>
            </button>
            
            <div className="flex -space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-synque-accent overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${company.id}${i}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div 
        className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-20"
        style={{ backgroundColor: company.color }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

