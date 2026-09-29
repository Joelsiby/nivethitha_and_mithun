import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MAPS_URL = 'https://share.google/FdfHUFTajhjECahJA';

export default function VenueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const mapsUrl = MAPS_URL;

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Welcome flowers, sitting on top of the top of the venue video */}
      <img
        src="/welcome-flowers.jpg"
        alt=""
        className="relative z-20 w-full h-auto -mb-20 sm:-mb-28 pointer-events-none select-none"
      />

      {/* Background video, full clip shown at its native aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '720 / 1280' }}>
        <video
          src="/venue_background.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain object-top"
        />

        {/* Title, overlaid on top of the video */}
        <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center px-6 pt-16">
          <motion.p
            className="font-script text-4xl sm:text-6xl text-[#6b5b4e] text-center pb-4"
            style={{
              textShadow: '0 0 16px rgba(255,255,255,0.9), 0 0 32px rgba(255,255,255,0.7), 0 0 48px rgba(255,255,255,0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Wedding Venue
          </motion.p>
        </div>

        {/* Venue info + Maps button, overlaid at the bottom of the video */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center px-6 pb-20 translate-x-4">
          {/* Floating location badge */}
          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-white/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: [20, 0, 0, -8, 0] } : {}}
            transition={{
              opacity: { delay: 0.5, duration: 0.4 },
              y: { delay: 0.5, duration: 2, times: [0, 0.2, 0.5, 0.75, 1], repeat: Infinity, repeatDelay: 0.6 },
            }}
          >
            <MapPin className="w-5 h-5 text-[#3d3125] flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span className="font-serif text-base sm:text-lg text-[#3d3125] leading-tight">View on Maps</span>
              <span className="font-serif text-xs text-[#3d3125]/80 leading-tight">OG's Tharavadu, Panangad</span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Welcome flowers, sitting on top of the bottom of the venue video */}
      <img
        src="/welcome-flowers-bottom.png"
        alt=""
        className="relative z-20 w-full max-w-md mx-auto h-auto -mt-20 sm:-mt-24 pointer-events-none select-none"
      />
    </section>
  );
}
