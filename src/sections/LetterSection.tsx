import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function LetterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative w-full bg-[#faf7f2] overflow-hidden pt-0 pb-0 -mt-20 sm:-mt-24">
      {/* Floating hearts decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.img
            key={i}
            src="/blue_heart.png"
            alt=""
            className="absolute brightness-110 drop-shadow-sm"
            style={{
              left: `${(i * 7.5) % 100}%`,
              top: `${(i * 13) % 100}%`,
              width: `${25 + (i % 5) * 15}px`,
              height: 'auto',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              rotate: [0, 45, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + (i % 10),
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Letter framed inside the venue background card */}
        <motion.div
          className="relative w-screen flex-shrink-0 overflow-hidden pb-8 sm:pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative scale-110 translate-y-8 sm:translate-y-10">
            <img
              src="/venue_background.png"
              alt="Venue"
              className="w-full h-auto rounded-sm shadow-2xl"
            />

            {/* Letter text, set inside the card's inner border */}
            <div
              className="absolute flex flex-col items-center justify-center text-center"
              style={{ top: '11%', bottom: '10%', left: '19%', right: '19%' }}
            >
              <p
                className="font-script text-[#4a5d3a] leading-tight"
                style={{ fontSize: 'clamp(26px, 6.5vw, 46px)' }}
              >
                To Our Cherished Family &amp; Friends,
              </p>

              <div
                className="my-3"
                style={{ width: '15%', borderTop: '1px solid #7ca0c4' }}
              />

              <p
                className="font-serif italic text-[#4a5d3a]/90"
                style={{ fontSize: 'clamp(15px, 3.3vw, 23px)', marginBottom: '3%' }}
              >
                We found each other, and now it's time to celebrate!
              </p>

              <p
                className="font-serif text-[#4a5d3a]/80 leading-relaxed"
                style={{ fontSize: 'clamp(13px, 2.8vw, 20px)', marginBottom: '3%' }}
              >
                Life's greatest blessings are the loved ones who stand beside us, and we cannot imagine embarking on this next adventure without you.
              </p>

              <p
                className="font-serif text-[#4a5d3a]/80 leading-relaxed"
                style={{ fontSize: 'clamp(13px, 2.8vw, 20px)' }}
              >
                Please join us for a day filled with love, laughter, and lifelong memories as we tie the knot.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider flowers */}
        <img
          src="/divider_flowers.jpg"
          alt=""
          className="relative z-40 -mt-44 sm:-mt-48 -mb-28 sm:-mb-32 w-full max-w-md h-auto pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
