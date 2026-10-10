import { useState, useCallback } from 'react';
import MicroSlats from './Background';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Works from './components/Works';
import Footer from './components/Footer';
import ServicePopup from './components/ServicePopup';

/*
 * Layer structure:
 *  - .bg-layer (z-index 0): MicroSlats canvas, spans top of page through #capabilities
 *  - .site-content (z-index 10): all sections and interactive UI above the background
 */
function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <>
      {/* «НАРУЖКА»: frosted frame, becomes top bar on mobile */}
      <div className="premium-frame" />

      {/* Header navigation */}
      <nav className="nav-container">
        <a href="#capabilities" className="nav-link">Capabilities</a>
        <a href="#works" className="nav-link">Works</a>
        <a href="#footer" className="nav-link">Contact</a>
      </nav>

      {/* Background wrapper: hero + capabilities define its height */}
      <div className="bg-wrap" style={{ position: 'relative' }}>
        <div className="bg-layer">
          <MicroSlats
            preset="swell"
            color="#F97316"
            glintColor="#93a7c3"
            backgroundColor="#120f17"
            slatWidth={10}
            slatHeight={25}
            gap={3}
            roundness={0.75}
            interactive
            cursorStrength={1}
            cursorSize={40}
            swirl={0}
            trail={1.4}
            lean={0}
            intro
            scale={1.5}
            speed={0.6}
            direction={250}
            chop={0.55}
            stretch={0}
            glint={0.7}
            contrast={1.25}
            perspective={0.55}
            fog={0.55}
            introDuration={1.5}
            paused={false}
          />
        </div>

        <div className="site-content">
          <Hero />
          <Capabilities />
        </div>
      </div>

      <div className="site-content">
        <Works />
        <Footer onOpenPopup={openPopup} />
      </div>

      <ServicePopup isOpen={popupOpen} onClose={closePopup} />
    </>
  );
}

export default App;
