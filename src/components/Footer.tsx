import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import Shop360Black from '../assets/Shop360Black.png';
import Shop360White from '../assets/Shop360White.png';

const GITHUB_PROFILES = [
  { name: 'Muhammad Azeem', username: 'xo-azeem', url: 'https://github.com/xo-azeem' },
  { name: 'Faris Salman', username: 'farissalman12', url: 'https://github.com/farissalman12' },
];

const EMAIL_PROFILES = [
  { name: 'Muhammad Azeem', email: 'mailmeatazeem@gmail.com' },
  { name: 'Faris Salman', email: 'farishunzai@gmail.com' },
];

const LINKEDIN_PROFILES = [
  { name: 'Muhammad Azeem', url: 'https://www.linkedin.com/in/m-azeem-nadeem/' },
  { name: 'Faris Salman', url: 'https://www.linkedin.com/in/faris-salman-b493b21a4/' },
];

export function Footer() {
  const { theme } = useTheme();
  const [githubModalOpen, setGithubModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [linkedinModalOpen, setLinkedinModalOpen] = useState(false);
  const brandName = "Shop360°";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 80; // Offset for fixed header if any
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      label: "GitHub",
      isGitHub: true,
      isEmail: false,
      isLinkedIn: false,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      isGitHub: false,
      isEmail: false,
      isLinkedIn: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      isGitHub: false,
      isEmail: true,
      isLinkedIn: false,
    },
  ];

  const mainLinks = [
    {
      href: "#about",
      label: "About"
    },
    {
      href: "#features",
      label: "Features"
    },
    {
      href: "#how-it-works",
      label: "How It Works"
    },
    {
      href: "#contact",
      label: "Contact"
    }
  ];

  const copyright = {
    text: `© 2026 ${brandName}. All rights reserved.`,
    license: "Final Year Project 2026"
  };

  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#000000] pb-6 pt-10 sm:pt-12 md:pt-14 lg:pb-8 lg:pt-24 border-t border-[#E0E0E0] dark:border-[#333333] transition-colors duration-300 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-x-2 cursor-pointer w-fit"
            aria-label={brandName}
          >
            <img 
              src={theme === 'dark' ? Shop360White : Shop360Black} 
              alt={`${brandName} Logo`} 
              className="h-6 sm:h-7 md:h-8 w-auto"
            />
            <span className="font-bold text-lg sm:text-xl text-[#000000] dark:text-[#FFFFFF]">{brandName}</span>
          </a>
          <ul className="flex list-none flex-wrap gap-2 sm:gap-0 sm:space-x-3 sm:space-y-0">
            {socialLinks.map((link, i) => (
              <li key={i}>
                {link.isGitHub ? (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0"
                    onClick={() => setGithubModalOpen(true)}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Button>
                ) : link.isEmail ? (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0"
                    onClick={() => setEmailModalOpen(true)}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Button>
                ) : link.isLinkedIn ? (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0"
                    onClick={() => setLinkedinModalOpen(true)}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#E0E0E0] dark:border-[#333333] mt-6 sm:mt-6 pt-5 sm:pt-6 md:pt-6 lg:pt-8 lg:grid lg:grid-cols-10 lg:gap-4">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-5 lg:justify-end -mx-1">
              {mainLinks.map((link, i) => (
                <li key={i} className="shrink-0">
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-xs sm:text-sm text-[#000000] dark:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors cursor-pointer py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 sm:mt-5 lg:mt-0 lg:row-[1/3] lg:col-[1/4] text-xs sm:text-sm leading-relaxed text-[#666666] dark:text-[#999999] min-w-0">
            <div className="break-words">{copyright.text}</div>
            {copyright.license && <div className="mt-1 break-words">{copyright.license}</div>}
          </div>
        </div>
      </div>

      {/* GitHub contributors modal */}
      <AnimatePresence>
        {githubModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#000000]/40 dark:bg-[#000000]/60 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setGithubModalOpen(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full max-w-md max-h-[calc(100vh-2rem)] rounded-2xl border border-[#E8E8E8] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#0D0D0D] shadow-xl dark:shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-4 sm:p-6 overflow-y-auto pointer-events-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="github-modal-heading"
              >
            <div className="flex items-center justify-between mb-5">
              <h2
                id="github-modal-heading"
                className="text-lg font-semibold text-[#000000] dark:text-[#FFFFFF] tracking-tight"
              >
                Contributors
              </h2>
              <button
                type="button"
                onClick={() => setGithubModalOpen(false)}
                className="p-1.5 rounded-full text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#FFFFFF] hover:bg-[#F0F0F0] dark:hover:bg-[#1A1A1A] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-0">
              {GITHUB_PROFILES.map((profile, index) => (
                <React.Fragment key={profile.username}>
                  {index > 0 && (
                    <div className="my-4 border-t border-[#EBEBEB] dark:border-[#2A2A2A]" aria-hidden="true" />
                  )}
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 py-2 rounded-xl px-3 -mx-3 text-[#000000] dark:text-[#FFFFFF] hover:bg-[#F8F8F8] dark:hover:bg-[#1A1A1A] transition-colors duration-200 group"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-[#000000] dark:text-[#FFFFFF] truncate">
                        {profile.name}
                      </p>
                      <p className="text-sm text-[#666666] dark:text-[#999999] truncate">
                        @{profile.username}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 shrink-0 text-[#666666] dark:text-[#999999] group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
                  </a>
                </React.Fragment>
              ))}
            </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Email contributors modal */}
      <AnimatePresence>
        {emailModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#000000]/40 dark:bg-[#000000]/60 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setEmailModalOpen(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full max-w-md max-h-[calc(100vh-2rem)] rounded-2xl border border-[#E8E8E8] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#0D0D0D] shadow-xl dark:shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-4 sm:p-6 overflow-y-auto pointer-events-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="email-modal-heading"
              >
              <div className="flex items-center justify-between mb-5">
                <h2
                  id="email-modal-heading"
                  className="text-lg font-semibold text-[#000000] dark:text-[#FFFFFF] tracking-tight"
                >
                  Contact
                </h2>
                <button
                  type="button"
                  onClick={() => setEmailModalOpen(false)}
                  className="p-1.5 rounded-full text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#FFFFFF] hover:bg-[#F0F0F0] dark:hover:bg-[#1A1A1A] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-0">
                {EMAIL_PROFILES.map((profile, index) => (
                  <React.Fragment key={profile.email}>
                    {index > 0 && (
                      <div className="my-4 border-t border-[#EBEBEB] dark:border-[#2A2A2A]" aria-hidden="true" />
                    )}
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center justify-between gap-3 py-2 rounded-xl px-3 -mx-3 text-[#000000] dark:text-[#FFFFFF] hover:bg-[#F8F8F8] dark:hover:bg-[#1A1A1A] transition-colors duration-200 group"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-[#000000] dark:text-[#FFFFFF] truncate">
                          {profile.name}
                        </p>
                        <p className="text-sm text-[#666666] dark:text-[#999999] truncate">
                          {profile.email}
                        </p>
                      </div>
                      <Mail className="w-4 h-4 shrink-0 text-[#666666] dark:text-[#999999] group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
                    </a>
                  </React.Fragment>
                ))}
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* LinkedIn contributors modal */}
      <AnimatePresence>
        {linkedinModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#000000]/40 dark:bg-[#000000]/60 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setLinkedinModalOpen(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full max-w-md max-h-[calc(100vh-2rem)] rounded-2xl border border-[#E8E8E8] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#0D0D0D] shadow-xl dark:shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-4 sm:p-6 overflow-y-auto pointer-events-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="linkedin-modal-heading"
              >
              <div className="flex items-center justify-between mb-5">
                <h2
                  id="linkedin-modal-heading"
                  className="text-lg font-semibold text-[#000000] dark:text-[#FFFFFF] tracking-tight"
                >
                  LinkedIn
                </h2>
                <button
                  type="button"
                  onClick={() => setLinkedinModalOpen(false)}
                  className="p-1.5 rounded-full text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#FFFFFF] hover:bg-[#F0F0F0] dark:hover:bg-[#1A1A1A] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-0">
                {LINKEDIN_PROFILES.map((profile, index) => (
                  <React.Fragment key={profile.url}>
                    {index > 0 && (
                      <div className="my-4 border-t border-[#EBEBEB] dark:border-[#2A2A2A]" aria-hidden="true" />
                    )}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 py-2 rounded-xl px-3 -mx-3 text-[#000000] dark:text-[#FFFFFF] hover:bg-[#F8F8F8] dark:hover:bg-[#1A1A1A] transition-colors duration-200 group"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-[#000000] dark:text-[#FFFFFF] truncate">
                          {profile.name}
                        </p>
                        <p className="text-sm text-[#666666] dark:text-[#999999] truncate">
                          LinkedIn profile
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 shrink-0 text-[#666666] dark:text-[#999999] group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
                    </a>
                  </React.Fragment>
                ))}
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}