import React from 'react';
import { FlaskConical, ShieldCheck, Sprout } from 'lucide-react';
import visionImg from '../assets/Our-vission.jpeg';
import leafIconImg from '../assets/common/Leaf.png';

export const VisionMission: React.FC = () => {
  const missionCards = [
    {
      number: "01",
      title: "Science-Led",
      description: "Product development rooted in agronomy, soil science and plant nutrition research.",
      icon: FlaskConical
    },
    {
      number: "02",
      title: "Dependable Quality",
      description: "Disciplined processes from raw-material intake to finished-goods dispatch.",
      icon: ShieldCheck
    },
    {
      number: "03",
      title: "Farmer-Focused",
      description: "Practical, field-relevant solutions designed around the real needs of Indian farmers.",
      icon: Sprout
    }
  ];

  return (
    <section className="vision-mission-section" id="vision-mission">
      {/* Background Watermark Illustration Pattern */}
      <div className="vm-watermark-bg"></div>

      {/* Mobile Tag Header: Shown first on mobile, centered */}
      <div className="vm-mobile-header reveal-up">
        <div className="vm-tag">
          <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
          <span>OUR VISION &amp; MISSION</span>
        </div>
      </div>

      {/* Featured Arch Image - Covering full height of section */}
      <div className="vm-arch-image-wrapper reveal-left">
        <img
          src={visionImg}
          alt="Agri science vision"
          className="vm-arch-img"
        />
      </div>

      <div className="vm-container">
        {/* Top Grid: Left 38% Spacer & Right Vision/Mission Headings */}
        <div className="vm-top-grid">
          {/* Left Column Spacer for arch image */}
          <div className="vm-image-col" aria-hidden="true"></div>

          {/* Right Column: Vision Header, Statement & Mission Heading */}
          <div className="vm-content-col reveal-right">
            {/* Desktop Tag */}
            <div className="vm-tag vm-desktop-tag">
              <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
              <span>OUR VISION &amp; MISSION</span>
            </div>

            <h3 className="vm-title">Our Vision &amp; Commitment</h3>

            <p className="vm-vision-statement">
              To build a trusted Indian agricultural-input and crop sciences company delivering science-led, reliable and farmer-focused solutions.
            </p>

            <div className="vm-mission-header">
              <h3 className="vm-mission-title">Our Mission Pillars</h3>
            </div>
          </div>
        </div>

        {/* Mission Cards Row - Overlapping bottom of image */}
        <div className="vm-mission-cards-wrapper">
          <div className="vm-cards-grid stagger-reveal">
            {missionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="vm-mission-card">
                  <span className="vm-card-number">{card.number}</span>
                  <div className="vm-card-icon-wrapper">
                    <IconComponent size={26} className="vm-card-icon" />
                  </div>
                  <h4 className="vm-card-title">{card.title}</h4>
                  <p className="vm-card-description">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
