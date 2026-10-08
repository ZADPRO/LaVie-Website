import React from 'react';
import { Calendar, Award, Factory, MapPin } from 'lucide-react';
import aboutImg from '../assets/aboutus/about image.png';
import leafIconImg from '../assets/common/Leaf.png';

export const AboutUs: React.FC = () => {
  // Main about image imported from assets
  const mainAboutImg = aboutImg;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Mobile Header: Tag + Title displayed first on mobile */}
        <div className="about-header-mobile reveal-up">
          <div className="about-tag">
            <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
            <span>About La Vie</span>
          </div>
          <h2 className="about-heading">
            Science, Quality &amp; Sustainability in Agriculture
          </h2>
        </div>

        {/* Full Image */}
        <div className="leaf-mask-container reveal-left">
          <img
            src={mainAboutImg}
            alt="Lush Agricultural Crops"
            className="leaf-mask-img"
          />
        </div>

        {/* About Content */}
        <div className="about-content-column">
          {/* Desktop Header: Tag + Title displayed in right column on desktop */}
          <div className="about-header-desktop">
            <div className="about-tag reveal-right">
              <img src={leafIconImg} alt="Leaf" className="tag-leaf-icon" />
              <span>About La Vie</span>
            </div>

            <h2 className="about-heading reveal-right delay-100">
              Science, Quality &amp; Sustainability in Agriculture
            </h2>
          </div>

          <div className="about-description reveal-right delay-200">
            <p>
              La Vie Crop Sciences is a Tamil Nadu based agricultural enterprise focused on crop nutrition, soil health, biological inputs and sustainable agriculture. Established in 2023, we combine agricultural expertise, manufacturing, agro trading and technology to deliver reliable solutions for modern farming.
            </p>
            <p>
              Backed by 20+ years of promoter-group experience, we take a holistic approach from soil and seed to crop and supply chain, creating science driven solutions for healthier crops, better productivity and a sustainable agricultural future.
            </p>
          </div>

          {/* Four Highlight Points Grid */}
          <div className="about-highlights-grid stagger-reveal">
            {/* Stat 1 */}
            <div className="stat-card">
              <div className="stat-icon-box">
                <Calendar size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-number">2023</span>
                <span className="stat-label">YEAR ESTABLISHED</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat-card">
              <div className="stat-icon-box">
                <Award size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-number">20+ YEARS</span>
                <span className="stat-label">PROMOTER-GROUP EXPERIENCE</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat-card">
              <div className="stat-icon-box">
                <Factory size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-number">30,000+ SQ. FT.</span>
                <span className="stat-label">MANUFACTURING FACILITY</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="stat-card">
              <div className="stat-icon-box">
                <MapPin size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-number">4</span>
                <span className="stat-label">OPERATIONAL LOCATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
