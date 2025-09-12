import React from 'react';

const SponsorsHome = () => {
  return (
    <section id="sponsors-home" className="py-16 px-4 bg-gradient-to-b from-onyx to-gunmetal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
            Our Sponsors
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
            <img src="/GameEon.jpg" alt="GameEon Studios" className="w-50 h-50 object-contain mb-4" />
            <h3 className="text-xl font-bold text-neon-mint font-azonix mb-2">GameEon Studios</h3>
            <span className="text-teal-glow font-inter mb-2">Brand Sponsor</span>
          </div>
            <div className="bg-gunmetal/50 tri-cut p-6 neon-border flex flex-col items-center">
              <img src="/assets/hpe.jpg" alt="Hewlett-Packard Enterprise" className="w-50 h-50 object-contain mb-4" />
            <h3 className="text-xl font-bold text-teal-glow font-azonix mb-2">Hewlett-Packard Enterprise</h3>
            <span className="text-neon-mint font-inter mb-2">Tech Sponsor</span>
          </div>
        </div>
        {/* Add more sponsors below as needed */}
      </div>
    </section>
  );
};

export default SponsorsHome;
