function showVideo(props) {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <video width="640" height="360" controls>
        <source src={props.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default showVideo;
