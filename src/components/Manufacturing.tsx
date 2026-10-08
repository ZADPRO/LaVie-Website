import React from 'react';
import { Check, Building2 } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

export const Manufacturing: React.FC = () => {
  const points = [
    "Raw-Material Handling",
    "Formulation & Processing",
    "Quality Control",
    "Packaging",
    "Finished-Goods Storage"
  ];

  return (
    <section className="mfg-section" id="manufacture">
      <div className="mfg-container">
        {/* Left Side Content */}
        <div className="mfg-content-col">
          <div className="mfg-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>MANUFACTURE</span>
          </div>

          <h2 className="mfg-title">
            Manufacturing Infrastructure
          </h2>

          <p className="mfg-description">
            Our expansive manufacturing facility of more than 30,000 square feet has been planned to support every critical stage of product preparation and handling. The layout enables an orderly, end-to-end material flow, from the receipt of raw materials to the storage of finished goods, promoting hygiene, efficiency and product integrity at each step.
          </p>

          {/* 5 Checklist Points in 2-Column Grid */}
          <div className="mfg-points-grid">
            {points.map((point, index) => (
              <div key={index} className="mfg-point-item">
                <span className="mfg-check-badge">
                  <Check size={16} className="mfg-check-icon" />
                </span>
                <span className="mfg-point-text">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image Composition */}
        <div className="mfg-images-col">
          {/* Decorative Dot Grid Pattern */}
          <div className="mfg-dots-pattern" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="mfg-dot"></span>
            ))}
          </div>

          {/* Main Top Right Facility Image */}
          <div className="mfg-image-card main-img-card">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
              alt="La Vie Manufacturing Facility"
              className="mfg-img"
            />
          </div>

          {/* Overlapping Bottom Left Processing Image */}
          <div className="mfg-image-card secondary-img-card">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              alt="Quality Processing & Packaging"
              className="mfg-img"
            />
          </div>

          {/* Overlapping Floating White Stat Card */}
          <div className="mfg-stat-badge">
            <div className="mfg-stat-icon-wrapper">
              <Building2 size={26} />
            </div>
            <div className="mfg-stat-number">30,000+<span> sq. ft</span></div>

          </div>
        </div>
      </div>
    </section >
  );
};
