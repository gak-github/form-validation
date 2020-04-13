import { createPortal } from 'react-dom';
import React from 'react';
    
export default function Modal({children, open, setOpen}) {
    const content = open && (
        <div className="overlay">
            <div className="modal">
                <button className="modal-close"
                type="button" onClick={ () => setOpen(false)} >
                    Close
                </button>
            </div>
            <div className="modal-body">{children}</div>
        </div>
    );
    return createPortal(content, document.body);
}
