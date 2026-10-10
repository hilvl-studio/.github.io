import React from 'react';

interface FooterProps {
  onOpenPopup: () => void;
}

/* СЕКЦИЯ 4: ФУТЕР — original content; CTA opens the service popup */
const Footer: React.FC<FooterProps> = ({ onOpenPopup }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOpenPopup();
  };

  return (
    <section id="footer">
      <div className="footer-content">
        <h2>Let's Create Something Extraordinary</h2>
        <a href="#" className="cta-btn" onClick={handleClick}>
          Start a Project
        </a>
      </div>
    </section>
  );
};

export default Footer;
