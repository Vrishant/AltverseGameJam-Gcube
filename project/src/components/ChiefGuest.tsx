import React from 'react';

const ChiefGuest = () => {
  return (
    <section id="chief-guest" className="py-20 px-4 bg-gradient-to-b from-onyx to-gunmetal relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
          Chief Guest
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm mb-8"></div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/160x160?text=Chief+Guest" alt="Chief Guest" className="w-40 h-40 rounded-full object-cover mb-6" />
          <h3 className="text-2xl font-bold text-neon-mint font-azonix mb-2">Chief Guest Name</h3>
          <p className="text-soft-white/70 text-base font-inter max-w-xl">
            Description and details about the chief guest will be updated soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;
