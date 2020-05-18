import React, { Fragment } from "react";
import "./App.css";
import MergeSortingVisualizer from "./components/MergeSortingVisualizer/MergeSortingVisualizer";
import Navbar from "./components/partials/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <br />
        <br />
        <MergeSortingVisualizer></MergeSortingVisualizer>
      </div>
    </Fragment>
  );
}

export default App;
