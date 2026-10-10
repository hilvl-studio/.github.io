import React, { useEffect, useState } from 'react';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ПОП-АП ВЫБОРА УСЛУГИ — original services, selection logic, and mailto composition */
const SERVICES = [
  'AI-Assisted Development & Rapid Prototyping',
  'Generative AI for Commercial Media Production',
  'Local LLM Deployment & Autonomous AI Agents',
];

const CONTACT_EMAIL = 'hilvl.studio212@gmail.com';

const ServicePopup: React.FC<ServicePopupProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string>('');

  // Reset selection whenever the popup closes
  useEffect(() => {
    if (!isOpen) setSelectedService('');
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const mailtoHref = selectedService
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Project Request — ${selectedService}`
      )}&body=${encodeURIComponent(
        `I would like to contact you to discuss acquiring your services for: ${selectedService}.`
      )}`
    : '#';

  return (
    <div
      className={`popup-overlay${isOpen ? ' active' : ''}`}
      id="projectPopup"
      onClick={handleOverlayClick}
    >
      <div className="popup-window">
        <button className="popup-close" id="closePopup" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3 className="popup-title">Select Service</h3>
        <div className="cubes-container">
          {SERVICES.map((service) => (
            <div
              key={service}
              className={`service-cube${selectedService === service ? ' selected' : ''}`}
              data-service={service}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedService(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedService(service);
                }
              }}
            >
              {service}
            </div>
          ))}
        </div>
        <a
          href={mailtoHref}
          className={`popup-submit-btn${selectedService ? ' enabled' : ''}`}
          id="submitProject"
        >
          Send Request
        </a>
      </div>
    </div>
  );
};

export default ServicePopup;
