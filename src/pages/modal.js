import AccountModal from '../components/AccountModal';

import React from "react";
import "../styles/App.css";
import { GlobalProvider } from "../context/GlobalState";

function ModalPage() {
    return (
        <GlobalProvider>
            <div className="container">
                <AccountModal />
            </div>
        </GlobalProvider>
    )
}

export default ModalPage;