import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-synque-green rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-synque-accent rounded-full animate-pulse" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-synque-green">SYNQUE</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Companies', 'About', 'Ventures', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-synque-green/70 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-synque-green text-synque-light rounded-full text-sm font-medium hover:bg-synque-green/90 transition-all"
          >
            Join the Group
          </motion.button>
        </div>

        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-synque-light border-b border-synque-green/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {['Companies', 'About', 'Ventures', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
