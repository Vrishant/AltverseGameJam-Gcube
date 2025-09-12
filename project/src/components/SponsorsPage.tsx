import React from 'react';

const SponsorsPage = () => {
  return (
    <section id="sponsors-page" className="py-20 px-4 bg-gradient-to-b from-onyx to-gunmetal min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
            Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>
        {/* Main Sponsors */}
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="https://via.placeholder.com/120x120?text=GameEon" alt="GameEon Studios" className="w-28 h-28 object-contain mb-4" />
            <h3 className="text-xl font-bold text-neon-mint font-azonix mb-2">GameEon Studios</h3>
            <span className="text-teal-glow font-inter mb-2">Brand Sponsor</span>
          </div>
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="https://via.placeholder.com/120x120?text=HPE" alt="Hewlett-Packard Enterprise" className="w-28 h-28 object-contain mb-4" />
            <h3 className="text-xl font-bold text-teal-glow font-azonix mb-2">Hewlett-Packard Enterprise</h3>
            <span className="text-neon-mint font-inter mb-2">Tech Sponsor</span>
          </div>
        </div>
        {/* Stall Sponsors Placeholder */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-soft-white mb-6 font-azonix">Stall Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((num) => (
              <div key={num} className="bg-gunmetal/40 tri-cut p-6 neon-border flex flex-col items-center">
                <img src={`https://via.placeholder.com/96x96?text=Sponsor+${num}`} alt={`Stall Sponsor ${num}`} className="w-24 h-24 object-contain mb-4" />
                <h4 className="text-lg font-bold text-neon-mint font-azonix mb-2">Stall Sponsor {num}</h4>
                <span className="text-soft-white/60 font-inter">Details coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsPage;
