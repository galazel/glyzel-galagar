import { Stack, Avatar, Tooltip } from "@mui/material";
import { useEffect } from "react";

function Research() {
  useEffect(() => {
    const modal = document.getElementById("videoResearch");
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
    <section className="research py-5" id="research">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">Research Project</h1>
          <p className="lead text-muted">
            A glimpse into our innovative solution
          </p>
        </div>

        {/* Project Content */}
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-md-5 mb-4">
            <img
              src="/images/chalk1.jpg"
              alt="Automated Chalkboard Eraser"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          <div className="col-md-7">
            <h2 className="mb-3 text-primary">
              Automated Chalkboard Eraser Cleaner
            </h2>
            <p className="text-secondary fs-5">
              This research is one of our greatest projects we ever made when we
              were in senior high school. It is a system designed to reduce
              manual labor in cleaning chalkboard erasers. It utilizes a
              mechanical conveyor, motor systems, and suction mechanisms to
              clean erasers efficiently. The system aims to support educational
              institutions by promoting convenience, reducing chalk dust
              exposure, and enhancing daily operations.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#videoResearch"
              >
                Watch Demo Video
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#introResearch"
              >
                Read More
              </button>
            </div>

            {/* Authors */}
            <div className="mt-5">
              <h3 className="mb-3">Authors</h3>
              <Stack direction="row" spacing={2}>
                <Tooltip title="Nica Jane Taneo">
                  <Avatar
                    alt="Nica Jane Taneo"
                    src="/static/images/avatar/1.jpg"
                    sx={{ bgcolor: "primary.main" }}
                  />
                </Tooltip>
                <Tooltip title="Akishae Labastida">
                  <Avatar
                    alt="Akishae Labastida"
                    src="/static/images/avatar/2.jpg"
                    sx={{ bgcolor: "secondary.main" }}
                  />
                </Tooltip>
                <Tooltip title="Precious Anne Larayos">
                  <Avatar
                    alt="Precious Anne Larayos"
                    src="/static/images/avatar/3.jpg"
                    sx={{ bgcolor: "success.main" }}
                  />
                </Tooltip>
                <Tooltip title="Seim Manago">
                  <Avatar
                    alt="Seim Manago"
                    src="/static/images/avatar/4.jpg"
                    sx={{ bgcolor: "warning.main" }}
                  />
                </Tooltip>
                <Tooltip title="Glyzel Galagar">
                  <Avatar
                    alt="Glyzel Galagar"
                    src="/static/images/avatar/5.jpg"
                    sx={{ bgcolor: "error.main" }}
                  />
                </Tooltip>
              </Stack>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Research Intro (Image enlarged) */}
      <div
        className="modal fade"
        id="introResearch"
        tabIndex="-1"
        aria-labelledby="introModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="introModalLabel">
                Research Article
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="/images/research_intro.png"
                alt="research-intro"
                className="w-100"
                style={{ maxHeight: "90vh", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Demo Video */}
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
                  src="/images/videos/chalkboard.mp4"
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
