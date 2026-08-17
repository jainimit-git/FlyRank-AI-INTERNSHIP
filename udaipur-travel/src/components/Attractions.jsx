import { attractions } from '../data/udaipurData';

function Attractions() {
  return (
    <section className="attractions section section--dark" id="attractions">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Must-See Destinations</span>
          <h2 className="section-title section-title--light">
            Places to Visit
          </h2>
          <p className="section-desc section-desc--light">
            From floating palaces to hilltop forts — Udaipur&apos;s treasures
            await every traveler.
          </p>
        </div>

        <div className="attractions__grid">
          {attractions.map((place) => (
            <article key={place.id} className="place-card">
              <div className="place-card__image-wrap">
                <img
                  src={place.image}
                  alt={place.name}
                  className="place-card__image"
                  loading="lazy"
                />
                <span className="place-card__badge">{place.highlight}</span>
              </div>
              <div className="place-card__body">
                <h3 className="place-card__name">{place.name}</h3>
                <p className="place-card__desc">{place.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Attractions;
