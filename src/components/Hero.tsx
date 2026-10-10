import React from 'react';

/* СЕКЦИЯ 1: ИНТРО — original hero markup and reveal animation */
const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-logo">
        <div className="brand-name">
          <span className="base-letter">H</span>
          <span className="inner-letter">I</span>
          <span className="inner-letter">L</span>
          <span className="inner-letter">V</span>
          <span className="base-letter">L</span>
        </div>
        <div className="subtitle">.Studio</div>
      </div>
    </section>
  );
};

export default Hero;
