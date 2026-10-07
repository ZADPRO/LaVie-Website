import React from 'react';
import { Leaf, FlaskConical, ShieldCheck, Sprout, Building2, MapPin } from 'lucide-react';
import farmerImg from '../assets/Home/farmer.png';

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

      <div className="vm-container">
        {/* Top Grid: Arch Image (Left) & Vision Content (Right) */}
        <div className="vm-top-grid">
          {/* Left Column: Curved Arch Featured Image */}
          <div className="vm-image-col">
            <div className="vm-arch-image-wrapper">
              <img 
                src={farmerImg} 
                alt="Agri science farmer in field" 
                className="vm-arch-img" 
              />
            </div>
          </div>

          {/* Right Column: Vision Header & Stat Badges */}
          <div className="vm-content-col">
            <div className="vm-tag">
              <Leaf size={16} className="tag-icon" />
              <span>OUR VISION</span>
            </div>

            <h2 className="vm-title">Building India's Most Trusted Agri-Science Enterprise</h2>

            <p className="vm-vision-statement">
              To build a trusted Indian agricultural-input and crop sciences company delivering science-led, reliable and farmer-focused solutions.
            </p>

            {/* Stat Badges Row */}
            <div className="vm-stats-row">
              <div className="vm-stat-badge">
                <div className="vm-stat-icon-box">
                  <Building2 size={24} />
                </div>
                <div className="vm-stat-info">
                  <span className="vm-stat-number">30,000+ SQ. FT.</span>
                  <span className="vm-stat-label">MANUFACTURING FACILITY</span>
                </div>
              </div>

              <div className="vm-stat-badge">
                <div className="vm-stat-icon-box">
                  <MapPin size={24} />
                </div>
                <div className="vm-stat-info">
                  <span className="vm-stat-number">4</span>
                  <span className="vm-stat-label">OPERATIONAL LOCATIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 3 Mission Cards */}
        <div className="vm-mission-cards-wrapper">
          <div className="vm-cards-grid">
            {missionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="vm-mission-card">
                  <span className="vm-card-number">{card.number}</span>
                  <div className="vm-card-icon-wrapper">
                    <IconComponent size={28} className="vm-card-icon" />
                  </div>
                  <h3 className="vm-card-title">{card.title}</h3>
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
