import React, { Component, Fragment } from "react";
import "./MergeSortingVisualizer.css";
import Button from "../Button/Button";
import { getIntervals } from "../../utils/NumberUtils";

export default class MergeSortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };

    this.resetArray = this.resetArray.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 125; i++) {
      array.push(getIntervals(5, 600));
    }

    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <Fragment>
        <div className="row">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="row">
          <Button onClick={this.resetArray} design="success" text="New Array" />
        </div>
      </Fragment>
    );
  }
}
