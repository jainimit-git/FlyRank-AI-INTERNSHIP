import { galleryImages } from '../data/udaipurData';

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-desc">
            Glimpses of Udaipur&apos;s timeless beauty — lakes, palaces, and
            golden sunsets.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img) => (
            <figure
              key={img.id}
              className={`gallery__item gallery__item--${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__image"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
