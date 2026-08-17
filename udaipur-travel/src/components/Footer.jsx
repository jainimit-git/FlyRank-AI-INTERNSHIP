function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">◈ Udaipur</span>
          <p className="footer__tagline">
            City of Lakes — Where every sunset tells a royal story.
          </p>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#attractions">Places</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Plan Visit</a>
          <a href="#tips">Tips</a>
        </div>

        <p className="footer__copy">
          © {year} Udaipur Travel Guide. Made with love for Rajasthan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
