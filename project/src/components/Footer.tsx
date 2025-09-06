import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-gunmetal/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-8 h-8 text-neon-mint mr-3" />
            <h3 className="text-2xl font-bold text-soft-white font-azonix">
              ALTVERSE 2025
            </h3>
          </div>
          
          <p className="text-soft-white/60 mb-6 max-w-2xl mx-auto font-inter">
            Karnataka's premier 24-hour game development jam. Where creativity meets code, 
            and dreams become playable reality.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="text-sm text-soft-white/50 font-inter">
              <span className="text-neon-mint font-semibold">Organized by:</span> G Cube - Game Development Club
            </div>
            <div className="text-sm text-soft-white/50 font-inter">
              <span className="text-teal-glow font-semibold">Hosted at:</span> PES University, RR Campus
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/g-cube-pesu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neon-mint/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-neon-mint/30 transition-colors duration-300">
                {/* LinkedIn SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-neon-mint">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gunmetal/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-soft-white/40 text-sm mb-4 md:mb-0 font-inter">
                © 2025 Altverse. All rights reserved.
              </p>
              <div className="flex items-center text-soft-white/40 text-sm font-inter">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-neon-mint mx-2 animate-pulse" />
                <span>by G Cube Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;