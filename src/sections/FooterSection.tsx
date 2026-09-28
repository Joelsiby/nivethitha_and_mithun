import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="relative w-full bg-[#faf7f2]">
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Hope to see you */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="font-script text-2xl text-[#8b7d6b] mb-2">Hope to see you there!</p>
          <p className="font-display text-xl text-[#6b5b4e]">Nivethitha &amp; Mithun</p>

          <motion.div
            className="mt-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <img src="/blue_heart.png" alt="heart" className="w-12 sm:w-16 h-auto mx-auto opacity-80 drop-shadow-md" />
          </motion.div>
        </motion.div>

        {/* Couple Image (Full Bleed) */}
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/footer_image.png"
            className="w-full h-auto object-contain object-top"
            style={{ transform: 'scale(1.15) translateX(-6%)', transformOrigin: 'top center' }}
          />
          
          {/* Bottom text overlay */}
          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
