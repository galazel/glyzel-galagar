function Home() {
  return (
    <section className="about" id="about">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">
              <img
                src="/src/assets/images/glyzel_logo.png"
                alt="glyzel-logo"
                id="glyzel-logo"
              />
            </span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </header>
        <div className="px-4 py-5 my-5 text-center">
          <p>Hi! I am</p>
          <h1 className="display-5 fw-bold text-body-emphasis">Glyzel Galagar</h1>
          <div className="col-lg-20 mx-auto">
            <p className="display-1">Aspiring Software Developer</p>
            <p>I make websites and windows applications.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Download CV
              </button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-1">
              <a href="https://www.facebook.com/galagarglyzel" target="_blank">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://ph.linkedin.com/in/glyzel-galagar-03299b283?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/galazel" target="_blank">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
