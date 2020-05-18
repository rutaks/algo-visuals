import React, { Component, Fragment } from "react";
import "./MergeSortingVisualizer.css";
import Button from "../Button/Button";
import { getIntervals } from "../../utils/NumberUtils";
import { mergeSortAnimation } from "../SortingAlgorithms/SortingAlgorithms";

const SELECTED_COLOR = "orange";
const NORMAL_COLOR = "rgb(0, 153, 255)";
const FASTEST_SPEED = 10;
const SLOWEST_SPEED = 1000;
const DEFAULT_BLOCKS = 125;

export default class MergeSortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      speed: FASTEST_SPEED,
      blocks: DEFAULT_BLOCKS,
      isAnimating: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < 125; i++) {
      array.push(getIntervals(5, 600));
    }
    this.setState({ array });
  };

  changeAnimationSpeed = (e) => {
    const { value } = e.target;
    this.setState({ speed: value });
  };

  changeBlockNumber = (e) => {
    const { value } = e.target;
    this.setState({ blocks: value });
    const array = [];
    for (let i = 0; i < this.state.blocks; i++) {
      array.push(getIntervals(5, 600));
    }
    this.setState({ array });
  };

  mergeSort = () => {
    this.setState({ isAnimating: true });
    const animations = mergeSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const doesColorChange = i % 3 !== 2;
      if (doesColorChange) {
        const [barOneId, barTwoId] = animations[i]; // array bar's indexes
        const barOneStyle = bars[barOneId].style;
        const barTwoStyle = bars[barTwoId].style;
        const color = i % 3 === 0 ? SELECTED_COLOR : NORMAL_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (i === animations.length - 1)
            this.setState({ isAnimating: false });
        }, i * this.state.speed);
      } else {
        setTimeout(() => {
          const [barOneId, newHeight] = animations[i];
          const barOneStyle = bars[barOneId].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1)
            this.setState({ isAnimating: false });
        }, i * this.state.speed);
      }
    }
  };

  render() {
    const { array } = this.state;
    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-3">
            <fieldset class="form-group">
              <label>Animation Speed: {this.state.speed}</label>
              <input
                disabled={this.state.isAnimating}
                min={FASTEST_SPEED}
                max={SLOWEST_SPEED}
                type="range"
                class="custom-range"
                value={this.state.speed}
                onChange={(e) => this.changeAnimationSpeed(e)}
              />
            </fieldset>
          </div>
          <div className="col-lg-3">
            <fieldset class="form-group">
              <label>Number Of Blocks: {this.state.blocks}</label>
              <input
                disabled={this.state.isAnimating}
                min={3}
                max={DEFAULT_BLOCKS}
                type="range"
                class="custom-range"
                value={this.state.blocks}
                onChange={(e) => this.changeBlockNumber(e)}
              />
            </fieldset>
          </div>
        </div>
        <div className="row">
          <Button
            onClick={this.resetArray}
            disabled={this.state.isAnimating}
            design="success"
            text="New Array"
          />
          <Button
            onClick={this.mergeSort}
            disabled={this.state.isAnimating}
            design="danger"
            text="Merge Sort"
          />
        </div>
        <br />
        <div className="row">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </Fragment>
    );
  }
}
