import React from "react";
import styles from "./App.module.css";
import { Router } from "@reach/router";

import Campsites from "./Components/Campsites/Campsites.jsx";
import Campsite from "./Components/Campsite/Campsite.jsx";

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Router primary={false}>
          <Campsites path="/" />
          <Campsite path="/sites/:id" />
        </Router>
      </main>
    </div>
  );
}

export default App;
