import React from "react";
import "../styles/App.css";
import Account from "../components/Account";
import { GlobalProvider } from "../context/GlobalState";

function IndexPage() {
  return (
    <GlobalProvider>
      <div className="container">
        <Account />
      </div>
    </GlobalProvider>
  )
}

export default IndexPage;
