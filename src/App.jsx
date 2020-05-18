import React, { Fragment } from "react";
import "./App.css";
import MergeSortingVisualizer from "./components/MergeSortingVisualizer/MergeSortingVisualizer";

function App() {
  console.log(process.env.REACT_APP_API_ROUTE);
  return (
    <Fragment>
      <div className="container">
        <br />
        <br />
        <MergeSortingVisualizer></MergeSortingVisualizer>
      </div>
    </Fragment>
  );
}

export default App;
