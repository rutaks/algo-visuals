import React, { Fragment } from "react";
import "./App.css";
import MergeSortingVisualizer from "./components/MergeSortingVisualizer/MergeSortingVisualizer";
import { Navbar } from "./components/Partials/Navbar";

function App() {
  console.log(process.env.REACT_APP_API_ROUTE);
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
