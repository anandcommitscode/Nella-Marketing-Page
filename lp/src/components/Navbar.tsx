"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PhaseAwareCta from './PhaseAwareCta';
import { IS_PRE_LAUNCH } from '../config/phase';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Why Nella', path: '/why-nella' },
    { name: 'Made for Her', path: '/made-for-her' },
    { name: 'What it Does', path: '/what-it-does' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Stories', path: '/stories' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${isScrolled
            ? 'glassmorphism border-b bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs border-light-grey/40'
            : 'bg-transparent'
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">

          <Link
            href="/#hero"
            className="flex items-center gap-1.5 select-none group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img 
              src="/nellaBrown.png" 
              alt="nella logo" 
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-[13px] font-[500] font-sans hover:text-[#1F1410] tracking-tight transition-all duration-200 relative group py-1 lowercase ${isActive ? 'text-[#8F6F3E] font-semibold' : 'text-espresso/75'
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8F6F3E] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">


            <PhaseAwareCta
              className="relative overflow-hidden group px-4.5 py-2.5 rounded-full text-[#1F1410] text-[12.5px] font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm uppercase tracking-wider block cursor-pointer hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
              }}
            >
              <span className="relative z-10">{IS_PRE_LAUNCH ? 'join the waitlist' : 'get nella on the App Store'}</span>
              <ArrowRight size={13} className="text-[#1F1410] transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#8F6F3E]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
            </PhaseAwareCta>
          </div>

          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-espresso hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
          </button>

        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#FAF7F2] border-b border-light-grey/60 shadow-xl px-6 py-8 flex flex-col gap-6 md:hidden lowercase"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path));
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-[16px] font-semibold py-1.5 block ${isActive ? 'text-[#8F6F3E]' : 'text-espresso/80'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-4 pt-2">

              <PhaseAwareCta
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full text-[#1F1410] text-[13px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                }}
              >
                <span>{IS_PRE_LAUNCH ? 'join the waitlist' : 'get nella on the App Store'}</span>
                <ArrowRight size={14} className="text-[#1F1410]" />
              </PhaseAwareCta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
