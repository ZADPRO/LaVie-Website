import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import leafIconImg from '../assets/common/Leaf.png';

export const WhyLaVie: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const reasons = [
    {
      title: "Integrated Capability",
      content: "In-house formulation, processing, packaging, quality control and storage within a single 30,000+ sq. ft. facility."
    },
    {
      title: "Experienced Leadership",
      content: "A promoter group with 20+ years of enterprise experience across agriculture, trading, manufacturing and IT."
    },
    {
      title: "Wide, Relevant Range",
      content: "Nutrition, biological and speciality inputs addressing the complete crop-health spectrum under one roof."
    },
    {
      title: "Supply-Chain Strength",
      content: "Agro-trading expertise in sourcing and procurement, with a godown at Thiruvannamalai for storage and onward movement."
    },
    {
      title: "Digital Transparency",
      content: "Technology know-how for dealer management, product traceability and customer engagement."
    },
    {
      title: "Sustainable Focus",
      content: "Emphasis on organic, bio-based and natural inputs aligned with soil health and long-term farm productivity."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        {/* Left Side 3-Image Composition */}
        <div className="why-images-col">
          {/* Decorative Dot Matrix Background Pattern */}
          <div className="why-dots-pattern" aria-hidden="true">
            {Array.from({ length: 96 }).map((_, i) => (
              <span key={i} className="why-dot"></span>
            ))}
          </div>

          {/* Image 1: Main Top Left Farmer Image */}
          <div className="why-img-card img-card-1">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
              alt="Farmer inspecting crop health"
              className="why-img"
            />
          </div>

          {/* Image 2: Overlapping Bottom Right Agriculture Image */}
          <div className="why-img-card img-card-2">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
              alt="Modern agricultural field"
              className="why-img"
            />
          </div>

          {/* Image 3: Small Floating Accent Badge Image */}
          {/* <div className="why-img-card img-card-3">
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80"
              alt="Agro product sourcing"
              className="why-img"
            />
          </div> */}

          {/* Green Star Icon Accent */}
          <div className="why-star-accent1">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#0e8549" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

        </div>

        {/* Right Side Content Accordion */}
        <div className="why-content-col">
          <div className="why-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="why-title">
            Why La Vie Crop Sciences
          </h2>

          <p className="why-subtitle">
            Our strengths as a dependable partner for public-sector and institutional supply
          </p>

          {/* Accordion List */}
          <div className="why-accordion-list">
            {reasons.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`why-accordion-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="why-accordion-header">
                    <h3 className="why-accordion-title">{item.title}</h3>
                    <button
                      className="why-accordion-toggle-btn"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                  </div>

                  <div className={`why-accordion-body ${isOpen ? 'open' : ''}`}>
                    <div className="why-accordion-inner">
                      <p className="why-accordion-text">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
