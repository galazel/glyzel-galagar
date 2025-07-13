function ContactSuccess({ onClose }) {
  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Success</h5>
          </div>

          <div className="modal-body">
            <p>✅ Message sent successfully!</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default ContactSuccess;
