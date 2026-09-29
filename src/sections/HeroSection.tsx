import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface BirdProps {
  delay: number;
  duration: number;
  startY: number;
  reverse?: boolean;
  scale?: number;
}

function Bird({ delay, duration, startY, reverse = false, scale = 1 }: BirdProps) {
  return (
    <motion.svg
      className="absolute"
      style={{ 
        top: `${startY}%`,
        left: reverse ? '100%' : '-10%',
        transform: `scale(${scale})`,
      }}
      width="24"
      height="16"
      viewBox="0 0 24 16"
      initial={{ x: 0, opacity: 0 }}
      animate={{ 
        x: reverse ? '-120vw' : '120vw',
        opacity: [0, 1, 1, 0],
      }}
      transition={{ 
        duration, 
        delay,
        repeat: Infinity,
        ease: 'linear',
        opacity: { times: [0, 0.1, 0.9, 1] }
      }}
    >
      <motion.path
        d="M0,8 Q6,0 12,8 Q18,0 24,8"
        fill="none"
        stroke="rgba(100,100,100,0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{
          d: [
            "M0,8 Q6,0 12,8 Q18,0 24,8",
            "M0,8 Q6,4 12,8 Q18,4 24,8",
            "M0,8 Q6,0 12,8 Q18,0 24,8",
          ]
        }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-[100svh] overflow-hidden bg-[#faf7f2]"
    >

      {/* Hero Video */}
      <motion.div
        className="absolute inset-0"
        style={{ y: 0 }}
      >
        <video
          src="/Hero_video_3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero tagline, set on an arch */}
      <motion.div
        className="absolute top-[5%] left-0 right-0 z-20 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <svg viewBox="0 0 400 150" className="w-full h-auto max-w-2xl mx-auto">
          <path id="hero-arch-path" d="M 20,140 A 260,260 0 0 1 380,140" fill="none" />
          <text
            className="font-script"
            fill="#4a3a2a"
            style={{ fontSize: '46px', textShadow: '0 2px 10px rgba(255,255,255,0.6)' }}
          >
            <textPath href="#hero-arch-path" startOffset="50%" textAnchor="middle">
              We're starting a family
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Animated birds */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Bird delay={0} duration={18} startY={15} />
        <Bird delay={5} duration={22} startY={25} reverse />
        <Bird delay={10} duration={20} startY={10} />
        <Bird delay={3} duration={25} startY={35} reverse scale={0.4} />
        <Bird delay={15} duration={19} startY={20} />
        <Bird delay={8} duration={24} startY={30} reverse scale={0.5} />
      </div>

      {/* Floating decorative elements - small sparkles */}
      <div className="absolute inset-0 pointer-events-none z-[8]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Scroll down hint */}
      <motion.div
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { delay: 1, duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <p
          className="font-serif text-[10px] tracking-[0.4em] text-[#4a3a2a] uppercase font-medium"
          style={{ textShadow: '0 1px 6px rgba(255,255,255,0.6)' }}
        >
          Scroll Down
        </p>
        <ChevronDown className="w-5 h-5 text-[#4a3a2a] drop-shadow-md" />
      </motion.div>
    </section>
  );
}