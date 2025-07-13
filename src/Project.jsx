function Project(props) {
  const modalId = `videoModal-${props.id}`;
  const videoId = `demoVideo-${props.id}`;

  function stopVideo() {
    const video = document.getElementById(videoId);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
  return (
    <>
      <div className="card-project">
        <div className="card-items">
          <img
            src={props.image}
            className="card-img-top"
            alt={props.title}
            width="100px"
            height="200px"
          />
        </div>

        <div className="card-items card-body">
          <div className="body-items-card">
            <h5 className="card-title">{props.title}</h5>
          </div>
          <div className="body-items-card">
            <p className="card-text">{props.description}</p>
          </div>
          <div className="body-items-card">
            <div className="card-technology">
              <p>Technology Used:</p>
              {props.technology.map((tech, index) => (
                <img
                  key={index}
                  src={tech}
                  alt={`${props.title} tech ${index}`}
                  className="technology-items"
                />
              ))}
            </div>
          </div>
          <div className="body-items-card">
            <div className="mt-auto d-grid">
              <a
                href="#"
                className="btn btn-primary project-btn"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
                type="button"
              >
                Watch Demo Video
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
        onClick={stopVideo}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}-label`}>
                {props.title} Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={stopVideo}
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <video id={videoId} width="100%" controls>
                  <source src={props.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
