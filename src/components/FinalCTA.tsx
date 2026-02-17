import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbxDeO_8GKuLsvwzOeViKvtWYstI4YSLpLZYsxMWZi9nxhtCIo7pr5IZ_P2b0Nz6Q1kmRg/exec';

function FloatingPaths({
  position,
  corner = 'bottom-left',
}: {
  position: number;
  corner?: 'bottom-left' | 'top-right';
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  const cornerClasses =
    corner === 'top-right'
      ? 'absolute top-0 right-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden'
      : 'absolute bottom-0 left-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden';

  const transformClass = corner === 'top-right' ? 'scale-x-[-1] scale-y-[-1]' : '';

  return (
    <div className={cornerClasses}>
      <svg
        className={`w-full h-full text-[#000000] dark:text-[#FFFFFF] ${transformClass}`}
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.7, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot: leave empty, bots often fill it
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setErrorMessage('');
    try {
      // Use text/plain to avoid CORS preflight (browser blocks preflight to script.google.com).
      // Your script still receives the same JSON body and can JSON.parse(e.postData.contents).
      const res = await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ email: trimmed, website }),
      });
      let data: { status?: string; message?: string } = {};
      try {
        const text = await res.text();
        if (text) data = JSON.parse(text);
      } catch {
        // CORS or non-JSON response: request may still have succeeded
      }
      if (data.status === 'success') {
        setStatus('success');
        setEmail('');
        setWebsite('');
      } else if (data.status === 'error' && data.message) {
        setStatus('error');
        setErrorMessage(data.message.replace(/^Error:\s*/i, ''));
      } else {
        // No readable response (often CORS) – assume success if request completed
        setStatus('success');
        setEmail('');
        setWebsite('');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please check your connection and try again.');
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300 overflow-hidden"
    >
      {/* Fade transition at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />
      {/* Fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />

      {/* Line animation + orbs: explicitly behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingPaths position={1.2} corner="bottom-left" />
        <FloatingPaths position={1.2} corner="top-right" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F8F8F8] to-transparent dark:from-[#0D0D0D] dark:to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#F5F5F5] to-transparent dark:from-[#0A0A0A] rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F0F0F0] to-transparent dark:from-[#0A0A0A] rounded-full blur-3xl opacity-30" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center z-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-5 tracking-tight leading-[1.15]">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#444444] dark:from-[#FFFFFF] dark:to-[#AAAAAA] bg-clip-text text-transparent">
              Virtual Shopping?
            </span>
          </h2>
          <div className="h-px w-16 bg-[#E0E0E0] dark:bg-[#333333] mx-auto mb-8" />
          <p className="text-base md:text-lg text-[#666666] dark:text-[#999999] max-w-xl mx-auto leading-relaxed font-light mb-8">
            Be the first to know when Shop360° launches. Leave your email and we’ll notify you.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md mx-auto"
          >
            {/* Honeypot: hidden from users, bots often fill it; script rejects if non-empty */}
            <label className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setErrorMessage('');
                }
              }}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              className="flex-1 min-w-0 h-12 px-5 rounded-3xl bg-[#FFFFFF]/80 dark:bg-[#0D0D0D]/85 backdrop-blur-md border border-[#FFFFFF]/60 dark:border-[#FFFFFF]/15 text-[#000000] dark:text-[#FFFFFF] placeholder:text-[#666666] dark:placeholder:text-[#999999] text-base font-light shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] focus:outline-none focus:border-[#000000]/25 dark:focus:border-[#FFFFFF]/30 focus:ring-2 focus:ring-[#000000]/10 dark:focus:ring-[#FFFFFF]/10 transition-all duration-200"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="h-12 px-6 rounded-3xl bg-[#000000]/90 dark:bg-[#FFFFFF]/90 backdrop-blur-md text-[#FFFFFF] dark:text-[#000000] text-sm font-medium tracking-tight border border-[#000000]/20 dark:border-[#FFFFFF]/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-[#000000] dark:hover:bg-[#FFFFFF] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_6px_24px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-2 focus:ring-[#000000]/25 dark:focus:ring-[#FFFFFF]/25 disabled:opacity-60 transition-all duration-200 shrink-0"
            >
              {status === 'loading' ? 'Sending…' : 'Notify me'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm text-[#333333] dark:text-[#AAAAAA] font-light">
              Thanks — check your inbox. We’ll be in touch with your invite.
            </p>
          )}
          {status === 'error' && errorMessage && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400 font-light">
              {errorMessage}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
