import { bestTimeData } from '../data/udaipurData';

function StarRating({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`stars__star ${i < count ? 'stars__star--filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function BestTime() {
  return (
    <section className="best-time section section--warm" id="visit">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Plan Ahead</span>
          <h2 className="section-title">{bestTimeData.title}</h2>
        </div>

        <div className="seasons">
          {bestTimeData.seasons.map((season) => (
            <article
              key={season.name}
              className={`season-card ${season.recommended ? 'season-card--recommended' : ''}`}
            >
              {season.recommended && (
                <span className="season-card__tag">Recommended</span>
              )}
              <h3 className="season-card__name">{season.name}</h3>
              <p className="season-card__months">{season.months}</p>
              <p className="season-card__temp">{season.temp}</p>
              <StarRating count={season.rating} />
              <p className="season-card__desc">{season.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestTime;
