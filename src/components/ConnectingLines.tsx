import { motion } from 'motion/react';

export default function ConnectingLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <svg className="w-full h-full opacity-10" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M100 200 Q400 100 720 400 T1340 200" 
          stroke="#0A3D2E" 
          strokeWidth="2" 
          strokeDasharray="8 8" 
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          d="M200 600 Q600 700 720 400 T1240 600" 
          stroke="#0A3D2E" 
          strokeWidth="2" 
          strokeDasharray="8 8" 
        />
        <circle cx="720" cy="400" r="4" fill="#0A3D2E" />
      </svg>
    </div>
  );
}
