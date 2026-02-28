import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyGrid from './components/CompanyGrid';
import Footer from './components/Footer';
import ConnectingLines from './components/ConnectingLines';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-synque-green selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-synque-green z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <div className="relative">
          <Hero />
          <ConnectingLines />
        </div>

        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif italic mb-16 text-center"
            >
              Our Core <span className="not-italic font-sans font-bold tracking-tighter">Principles.</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-synque-green/5 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 font-serif italic">Shared Vision</h3>
                <p className="text-sm text-synque-green/70 leading-relaxed mb-6">
                  We believe that the most impactful innovations happen at the intersection of disciplines. Our group structure facilitates this cross-pollination.
                </p>
                <a href="#companies" className="text-xs font-bold uppercase tracking-widest text-synque-green hover:underline">View Portfolio →</a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl bg-white border border-synque-green/5 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 font-serif italic">Global Network</h3>
                <p className="text-sm text-synque-green/70 leading-relaxed mb-6">
                  With offices in London, Singapore, and New York, we provide our companies with the global footprint they need to scale rapidly.
                </p>
                <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-synque-green hover:underline">Our Locations →</a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-white border border-synque-green/5 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 font-serif italic">Sustainable Growth</h3>
                <p className="text-sm text-synque-green/70 leading-relaxed mb-6">
                  We prioritize long-term value over short-term gains, ensuring that our impact on the world is positive and enduring.
                </p>
                <a href="#ventures" className="text-xs font-bold uppercase tracking-widest text-synque-green hover:underline">Learn More →</a>
              </motion.div>
            </div>
          </div>
        </section>

        <CompanyGrid />

        <section id="contact" className="py-32 px-6 bg-synque-green text-synque-light overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif italic mb-8"
            >
              Ready to sync with the future?
            </motion.h2>
            <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">
              Whether you're a potential partner, a talented professional, or a visionary founder, we'd love to hear from you.
            </p>
            <button className="px-10 py-5 bg-synque-accent text-synque-green rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </div>
          
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold opacity-[0.02] whitespace-nowrap pointer-events-none">
            SYNQUE GROUP
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

