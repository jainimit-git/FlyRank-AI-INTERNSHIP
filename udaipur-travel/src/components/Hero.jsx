import { heroData } from '../data/udaipurData';

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroData.image})` }}
        role="img"
        aria-label="Panoramic view of Udaipur lakes and palaces"
      />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <p className="hero__eyebrow">Discover Rajasthan</p>
        <h1 className="hero__title">{heroData.title}</h1>
        <p className="hero__subtitle">{heroData.subtitle}</p>
        <p className="hero__tagline">{heroData.tagline}</p>

        <div className="hero__actions">
          <a href="#attractions" className="btn btn--primary">
            Explore Places
          </a>
          <a href="#visit" className="btn btn--outline">
            Plan Your Trip
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
