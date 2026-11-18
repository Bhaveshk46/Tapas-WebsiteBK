'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';
import { pastEvents } from '@/data/events';

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="pointer-events-none h-4 w-4"
    >
      {direction === 'left' ? (
        <polyline points="10 12 6 8 10 4" />
      ) : (
        <polyline points="6 4 10 8 6 12" />
      )}
    </svg>
  );
}

export default function GallerySlideshow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.tapas-gallery-slide');
    const distance = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[12px]">
        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') scroll('left');
            if (event.key === 'ArrowRight') scroll('right');
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-label="Past events gallery. Use left and right arrow keys to scroll."
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]"
        >
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion || paused ? 0 : 0.3,
                delay: reduceMotion || paused ? 0 : index * 0.04,
              }}
              className="tapas-gallery-slide w-full max-w-[340px] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
            >
              <Link
                href={`/events/${event.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-tapas-border bg-tapas-soft no-underline shadow-[0_2px_10px_rgba(11,120,200,0.05)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_24px_rgba(11,120,200,0.12)]"
                aria-label={`View details for ${event.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-tapas-pastel">
                  <Image
                    src={event.photos[0].src}
                    alt={event.photos[0].alt}
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 300px, 320px"
                    className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-1 p-5 pb-[1.4rem]">
                  <span className="text-[0.82rem] text-tapas-muted">
                    {[event.date, event.location].filter(Boolean).join(' · ') || event.year}
                  </span>
                  <span className="font-heading text-[1.05rem] font-semibold leading-[1.3] text-tapas-text">
                    {event.title}
                  </span>
                  <span className="mt-[0.4rem] text-[0.88rem] font-semibold text-tapas-accent">
                    View details →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          className="inline-flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full border-[1.5px] border-tapas-border bg-tapas-soft text-tapas-text transition-colors duration-200 hover:border-tapas-accent hover:bg-tapas-accent hover:text-white"
          onClick={() => scroll('left')}
          aria-label="Scroll gallery left"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          className="inline-flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full border-[1.5px] border-tapas-border bg-tapas-soft text-tapas-text transition-colors duration-200 hover:border-tapas-accent hover:bg-tapas-accent hover:text-white"
          onClick={() => scroll('right')}
          aria-label="Scroll gallery right"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
