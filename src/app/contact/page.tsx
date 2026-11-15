'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

/* ── Inline accessible SVG icons ── */
function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2.9.5 1.3.9.4.4.7.7.9 1.3.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5.9-.9 1.3-.4.4-.7.7-1.3.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-.9-.5-1.3-.9-.4-.4-.7-.7-.9-1.3-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-.9.9-1.3.4-.4.7-.7 1.3-.9.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.6.8-2.3 1.5C1 .9.4 1.6.1 2.5c-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.9.8 1.6 1.5 2.3.7.7 1.5 1.2 2.3 1.5.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.6-.8 2.3-1.5.7-.7 1.2-1.5 1.5-2.3.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.9-.8-1.6-1.5-2.3-.7-.7-1.5-1.2-2.3-1.5-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0z" />
      <path d="M12 5.9a6.1 6.1 0 100 12.2 6.1 6.1 0 000-12.2zm0 10a3.9 3.9 0 110-7.8 3.9 3.9 0 010 7.8zm6.4-11.7a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.13.56 4.13 1.54 5.88L0 24l6.31-1.66A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.28-6.1-3.48-8.52zM12 22c-1.94 0-3.78-.5-5.38-1.36l-.38-.22-3.74 1 1-3.64-.23-.39A9.94 9.94 0 012 12c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10z" />
      <path d="M17.5 14.5l-2.15-.65c-.28-.1-.58-.02-.78.22l-.9 1.02c-2.34-1.23-3.86-2.75-5.09-5.09l1.02-.9c.24-.21.33-.51.22-.78L9.5 6.5c-.14-.44-.55-.73-1-.73H7c-.55 0-1 .45-1 1 0 7.18 5.82 13 13 13 .55 0 1-.45 1-1v-1.5c0-.45-.29-.86-.73-1z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconChevronDown({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-5 h-5 text-tapas-muted transition-transform duration-200 shrink-0 ${
        isOpen ? 'rotate-180 text-tapas-accent' : ''
      }`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── FAQ sub-component ── */
type FaqItemProps = {
  id: number;
  question: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ id, question, children, isOpen, onToggle }: FaqItemProps) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="bg-tapas-soft border border-tapas-border rounded-[12px] overflow-hidden transition-all duration-200">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading text-[1.08rem] font-semibold text-tapas-text hover:text-tapas-accent transition-colors duration-150"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="flex-1">{question}</span>
        <IconChevronDown isOpen={isOpen} />
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 pb-5 pt-1 text-[0.96rem] text-tapas-muted leading-[1.65] border-t border-tapas-border/60"
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Main page component ── */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setOpenFaq((prev) => (prev === index ? null : index));

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-20 md:gap-28 pt-10 pb-24 md:pt-14">
      {/* SECTION: Contact */}
      <section aria-labelledby="contact-header-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Get in Touch
          </span>
          <h2
            id="contact-header-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-4"
          >
            We&apos;d love to hear from you
          </h2>
          <p className="max-w-[44rem] mx-auto text-tapas-muted text-[1.03rem] leading-[1.68]">
            Have any questions about our sessions, want to join, or just want to say hello? Reach
            out. We&apos;re here for students, faculty, and staff alike.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Contact card: Instagram */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col items-start gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-tapas-accent/40">
            <IconInstagram />
            <h3 className="font-heading text-[1.15rem] text-tapas-text font-semibold">
              Instagram
            </h3>
            <p className="text-tapas-muted text-[0.93rem]">
              Follow us for updates and send a message anytime.
            </p>
            <a
              href="https://www.instagram.com/tapas.pce"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center text-tapas-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
              aria-label="Message TAPAS on Instagram (opens in a new tab)"
            >
              @tapas.pce
            </a>
          </div>

          {/* Contact card: WhatsApp group */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col items-start gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-tapas-accent/40">
            <IconWhatsApp />
            <h3 className="font-heading text-[1.15rem] text-tapas-text font-semibold">
              TAPAS Members Group
            </h3>
            <p className="text-tapas-muted text-[0.93rem]">
              Session updates, timings, and venue details are shared here first.
            </p>
            <a
              href="https://chat.whatsapp.com/YOUR_GROUP_CODE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center text-tapas-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
              aria-label="Join the TAPAS Members Group on WhatsApp (opens in a new tab)"
            >
              Join the group
            </a>
          </div>

          {/* Contact card: Email */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col items-start gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-tapas-accent/40">
            <IconEmail />
            <h3 className="font-heading text-[1.15rem] text-tapas-text font-semibold">Email</h3>
            <p className="text-tapas-muted text-[0.93rem]">
              For questions, collaborations, and event enquiries.
            </p>
            <a
              href="mailto:tapas@example.com"
              className="mt-auto inline-flex items-center text-tapas-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
              aria-label="Send an email to TAPAS"
            >
              tapas@example.com
            </a>
          </div>

          {/* Contact card: Phone */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col items-start gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-tapas-accent/40">
            <IconPhone />
            <h3 className="font-heading text-[1.15rem] text-tapas-text font-semibold">Phone</h3>
            <p className="text-tapas-muted text-[0.93rem]">Prefer a call? Reach out to us.</p>
            <a
              href="tel:+910000000000"
              className="mt-auto inline-flex items-center text-tapas-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-tapas-accent"
              aria-label="Call TAPAS"
            >
              +91 00000 00000
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: Quick answers */}
      <section aria-labelledby="faq-heading">
        <h2
          id="faq-heading"
          className="font-heading text-[clamp(1.5rem,3vw,2rem)] text-tapas-text mb-6"
        >
          Quick answers
        </h2>
        <div className="max-w-[48rem] mx-auto flex flex-col gap-3.5">
          {/* FAQ 0 */}
          <FaqItem
            id={0}
            question="How do I join my first session?"
            isOpen={openFaq === 0}
            onToggle={() => toggleFaq(0)}
          >
            Reach out via Instagram, the TAPAS Members Group, or the website, and we will share the
            details of the next session with you.
          </FaqItem>

          {/* FAQ 1 */}
          <FaqItem
            id={1}
            question="Where will I find session timings and venue details?"
            isOpen={openFaq === 1}
            onToggle={() => toggleFaq(1)}
          >
            All timings and venue information are shared first in the TAPAS Members Group on
            WhatsApp.
          </FaqItem>

          {/* FAQ 2 */}
          <FaqItem
            id={2}
            question="Do I need to register or pay anything?"
            isOpen={openFaq === 2}
            onToggle={() => toggleFaq(2)}
          >
            No. Sessions are free for all students, faculty, and staff, and no prior experience is
            needed.
          </FaqItem>

          {/* FAQ 3 */}
          <FaqItem
            id={3}
            question="Who should I contact for collaborations or events?"
            isOpen={openFaq === 3}
            onToggle={() => toggleFaq(3)}
          >
            Please email us at tapas@example.com and we will get back to you.
          </FaqItem>
        </div>
      </section>
    </div>
  );
}