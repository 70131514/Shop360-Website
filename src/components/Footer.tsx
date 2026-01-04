import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import Shop360Black from '../assets/Shop360Black.png';
import Shop360White from '../assets/Shop360White.png';

export function Footer() {
  const { theme } = useTheme();
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
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@shop360.com",
      label: "Email"
    }
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
    <footer className="bg-[#FFFFFF] dark:bg-[#000000] pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-[#E0E0E0] dark:border-[#333333] transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-x-2 cursor-pointer"
            aria-label={brandName}
          >
            <img 
              src={theme === 'dark' ? Shop360White : Shop360Black} 
              alt={`${brandName} Logo`} 
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-[#000000] dark:text-[#FFFFFF]">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#E0E0E0] dark:border-[#333333] mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-[#000000] dark:text-[#FFFFFF] underline-offset-4 hover:underline transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 text-sm leading-6 text-[#666666] dark:text-[#999999] whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div className="mt-1">{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}