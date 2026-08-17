import { aboutData } from '../data/udaipurData';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <span className="section-label">About the City</span>
            <h2 className="section-title">{aboutData.title}</h2>
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} className="about__paragraph">
                {para}
              </p>
            ))}
          </div>

          <div className="about__stats">
            {aboutData.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
