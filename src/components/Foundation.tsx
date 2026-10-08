import React from 'react';
import { Leaf } from 'lucide-react';
import agricultureImg from '../assets/Foundation/Agriculture.jpeg';
import manufacturingImg from '../assets/Foundation/Mnufacturing.jpeg';
import agroTradingImg from '../assets/Foundation/Agro-trading.jpeg';
import technologyImg from '../assets/Foundation/Technology.jpeg';

export const Foundation: React.FC = () => {
  const foundationCards = [
    {
      id: 1,
      title: "AGRICULTURE",
      description: "Post graduate agricultural expertise spanning agronomy, crop production, soil and plant nutrition, agricultural inputs and a deep understanding of farmer requirements. This scientific core guides every formulation we develop.",
      bgImage: agricultureImg
    },
    {
      id: 2,
      title: "MANUFACTURING",
      description: "Hands-on manufacturing and entrepreneurial experience in process management, production planning, quality assurance, raw-material management, packaging and day to day plant operations, ensuring consistent, scalable output.",
      bgImage: manufacturingImg
    },
    {
      id: 3,
      title: "AGRO TRADING",
      description: "Proven experience in agro commodity sourcing, procurement, agricultural markets, supply chains, rural markets and distribution networks, giving La Vie dependable access to materials and farmers alike.",
      bgImage: agroTradingImg
    },
    {
      id: 4,
      title: "TECHNOLOGY",
      description: "IT and software expertise supporting digital distribution, dealer management, product traceability, customer engagement and data driven decision making, bringing modern transparency to agri input supply.",
      bgImage: technologyImg
    }
  ];

  return (
    <section className="foundation-section" id="foundation">
      <div className="foundation-container">
        {/* Header Section */}
        <div className="foundation-header">
          <div className="foundation-tag">
            <Leaf size={16} className="tag-icon" />
            <span>FOUNDATION</span>
          </div>
          <h2 className="foundation-title">A Multi-Disciplinary Foundation</h2>
          <p className="foundation-subtitle">
            Four complementary strengths, one integrated enterprise
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="foundation-cards-grid">
          {foundationCards.map((card) => (
            <div key={card.id} className="foundation-card">
              {/* Background Image & Gradient Overlay */}
              <div className="card-bg-wrapper">
                <img src={card.bgImage} alt={card.title} className="card-bg-img" />
                <div className="card-overlay"></div>
              </div>

              {/* Content Box */}
              <div className="card-content">
                <div className="card-description">
                  {card.description}
                </div>
                <div className="card-hz-line"></div>
                <h3 className="card-title">{card.title}</h3>
              </div>

              {/* White Padding Notch Corner with Small Icon Image */}
              <div className="arrow-btn-notch">
                <div className="card-image-badge">
                  <svg className="badge-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
