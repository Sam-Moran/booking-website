import React from "react";
import styles from "./App.module.css";
import { Router } from "@reach/router";

import Campsites from "./Components/Campsites/Campsites.jsx";
import Campsite from "./Components/Campsite/Campsite.jsx";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Router primary={false}>
          <Campsites path="/" />
          <Campsites path="/sites" />

          <Campsite path="/sites/:id" />
        </Router>
      </main>
    </div>
  );
}

export default App;
