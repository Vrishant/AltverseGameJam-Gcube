import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-4 bg-gradient-to-b from-onyx to-gunmetal relative">
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
            Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example sponsor cards, replace with real sponsors */}
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="https://via.placeholder.com/96x96?text=Sponsor" alt="Sponsor 1" className="w-24 h-24 object-contain mb-4" />
            <h3 className="text-lg font-bold text-neon-mint font-azonix mb-2">Sponsor Name 1</h3>
            <p className="text-soft-white/60 text-sm font-inter">Description or tagline for sponsor 1.</p>
          </div>
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="https://via.placeholder.com/96x96?text=Sponsor" alt="Sponsor 2" className="w-24 h-24 object-contain mb-4" />
            <h3 className="text-lg font-bold text-teal-glow font-azonix mb-2">Sponsor Name 2</h3>
            <p className="text-soft-white/60 text-sm font-inter">Description or tagline for sponsor 2.</p>
          </div>
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="https://via.placeholder.com/96x96?text=Sponsor" alt="Sponsor 3" className="w-24 h-24 object-contain mb-4" />
            <h3 className="text-lg font-bold text-neon-mint font-azonix mb-2">Sponsor Name 3</h3>
            <p className="text-soft-white/60 text-sm font-inter">Description or tagline for sponsor 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
