import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-synque-green text-synque-light py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-synque-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-synque-green rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">SYNQUE</span>
            </div>
            <p className="text-xl font-serif italic max-w-sm opacity-80">
              "Syncing the world's most unique ideas into a cohesive future."
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-synque-accent transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-synque-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-synque-accent transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-50">
          <p>© 2026 Synque Group Holdings. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
