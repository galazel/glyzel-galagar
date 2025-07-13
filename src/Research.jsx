import { useEffect } from "react";

function Research() {
  useEffect(() => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("demoVideo");

    const handleClose = () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };

    modal?.addEventListener("hidden.bs.modal", handleClose);

    return () => {
      modal?.removeEventListener("hidden.bs.modal", handleClose);
    };
  }, []);

  return (
    <section className="research py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">Research Project</h1>
          <p className="lead text-muted">
            A glimpse into our innovative solution
          </p>
        </div>

        {/* Project Intro */}
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-5 mb-4">
            <img
              src="src/assets/images/chalk1.jpg"
              alt="Automated Chalkboard Eraser"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-7">
            <h2 className="mb-3 text-primary">
              Automated Chalkboard Eraser Cleaner
            </h2>
            <p className="text-secondary fs-5">
              This research is one of our greatest project we ever made when
              where in senior high school. It is a system designed to reduce
              manual labor in cleaning chalkboard erasers. It utilizes a
              mechanical conveyor, motor systems, and suction mechanisms to
              clean erasers efficiently. The system aims to support educational
              institutions by promoting convenience, reducing chalk dust
              exposure, and enhancing daily operations.
            </p>
            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#videoResearch"
              >
                Watch Demo Video
              </button>

              <a
                href="src/assets/pdf/automated-chalkboard-research.pdf"
                target="_blank"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal with HTML5 Video */}
      <div
        className="modal fade"
        id="videoResearch"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Demo Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <video id="demoVideo" width="100%" controls>
                <source
                  src="src\assets\images\videos\chalkboard.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
