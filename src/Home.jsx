function Home() {
  return (
    <section className="home" id="home">
      <div className="container" id="home-container">
        {/* Header/Nav */}
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a
            href="#home"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
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
              <a href="#about" className="nav-link text-black">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-black">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-black">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#research" className="nav-link text-black">Research</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-black">Contact</a>
            </li>
          </ul>
        </header>

        {/* Main Section */}
        <div className="px-4 py-5 my-5 text-center">
          <p>Hi! I am</p>
          <h1 className="display-5">Glyzel Galagar</h1>
          <div className="col-lg-20 mx-auto">
            <p className="display-1">Aspiring Software Developer</p>
            <p>I make websites and windows applications.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Download CV
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
              <a
                href="https://www.facebook.com/galagarglyzel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://ph.linkedin.com/in/glyzel-galagar-03299b283"
                target="_blank"
                rel="noopener noreferrer"
               className="text-black"
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/galazel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
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
