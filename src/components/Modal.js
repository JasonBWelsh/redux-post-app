import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ open, onClose }) => 
    open
        ? ReactDOM.createPortal(
            <div className="modal">
                <button onClick={onClose}>X</button>
                <h3>This will be the post heading</h3>
                <p>This will be the post body</p>
            </div>,
            document.getElementById('modal-root')
            )
        : null

export default Modal;