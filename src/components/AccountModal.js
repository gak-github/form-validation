import React, {useState} from 'react';
import Modal from './modal/Modal';
import Account from './Account';

export default function AccountModal() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <h1 style={{textAlign: "center"}}>React Modal</h1>
                <h3 style={{ textAlign: "center" }}>with useState</h3>
            </div>
            <div className="modal-open">
                <button
                    type="button"
                    onClick={() => setOpen(true)}>  
                    Signup
                </button>
            </div>
            {open && <Modal open={open} setOpen={setOpen}>
                <Account />
            </Modal>}
        </>
    );
}