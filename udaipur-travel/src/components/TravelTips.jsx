import { travelTips } from '../data/udaipurData';

function TravelTips() {
  return (
    <section className="tips section" id="tips">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Traveler&apos;s Handbook</span>
          <h2 className="section-title">Essential Tips</h2>
          <p className="section-desc">
            Everything you need to know for a smooth and memorable Udaipur
            adventure.
          </p>
        </div>

        <div className="tips__grid">
          {travelTips.map((tip) => (
            <article key={tip.title} className="tip-card">
              <span className="tip-card__icon" aria-hidden="true">
                {tip.icon}
              </span>
              <h3 className="tip-card__title">{tip.title}</h3>
              <p className="tip-card__text">{tip.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelTips;
