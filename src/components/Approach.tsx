import React from 'react';
import { Microscope, ShieldCheck, Wheat, Leaf } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

export const Approach: React.FC = () => {
  const approachItems = [
    {
      id: 1,
      title: 'Science-Led Development',
      description: 'Formulations guided by agronomic and soil science principles.',
      icon: Microscope
    },
    {
      id: 2,
      title: 'Dependable Quality',
      description: 'Consistent processes for reliable, repeatable product.',
      icon: ShieldCheck
    },
    {
      id: 3,
      title: 'Practical Relevance',
      description: 'Products shaped by real field conditions and crop needs.',
      icon: Wheat
    },
    {
      id: 4,
      title: 'Sustainable Future',
      description: 'Natural, bio-based solutions that respect soil and environment.',
      icon: Leaf
    }
  ];

  return (
    <section className="approach-section" id="approach">
      <div className="approach-container">
        {/* Top Header */}
        <div className="approach-header reveal-up">
          <div className="approach-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>OUR APPROACH</span>
          </div>
          <h2 className="approach-title">Our Approach</h2>
          <p className="approach-subtitle">
            Science, quality, relevance and the farmer at the centre
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="approach-cards-grid stagger-reveal">
          {approachItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="approach-card-item">
                <div className="approach-card-icon-box">
                  <IconComponent className="approach-card-icon" size={28} />
                </div>
                <div className="approach-card-content">
                  <h3 className="approach-card-title">{item.title}</h3>
                  <p className="approach-card-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
