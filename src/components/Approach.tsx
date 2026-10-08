import React from 'react';
import leafIconImg from '../assets/common/Leaf.png';

export const Approach: React.FC = () => {
  const approachItems = [
    {
      id: 1,
      title: 'Science-Led Development',
      description: 'Formulations guided by agronomic and soil science principles.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Dependable Quality',
      description: 'Consistent processes for reliable, repeatable product.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Practical Relevance',
      description: 'Products shaped by real field conditions and crop needs.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Sustainable Future',
      description: 'Natural, bio-based solutions that respect soil and environment.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80'
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
          {approachItems.map((item) => (
            <div key={item.id} className="approach-card-item">
              <div className="approach-card-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="approach-card-img"
                />
              </div>

              {/* White Content Box Overlap (No share button as requested) */}
              <div className="approach-card-content">
                <h3 className="approach-card-title">{item.title}</h3>
                <p className="approach-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
