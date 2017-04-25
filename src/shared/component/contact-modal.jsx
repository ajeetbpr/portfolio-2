// @flow

import React from 'react'

const Modal = () =>
  <div className="contact-modal modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Contact Caroline</h5>
          <button type="button" className="close" data-dismiss="modal">x</button>
        </div>
        <div className="modal-body">
          This is where I might have some contact information.
        </div>
        <div className="modal-footer">
          <button type="button" role="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

export default Modal
