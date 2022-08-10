import React, { Component } from "react";
import "./App.css";
import Box from "./box.component";

class App extends Component {
  state = {
    boxes: [],


  };

  // getBoxes = () => {
  //   return this.state.boxes.map(() => (
  //     <div>
  //       <Box />
  //     </div>
  //   ));
  // };

  createBox = () => {
    const { boxes } = this.state;

    this.setState({ boxes: [...boxes, 0] });
  }

  onDelete = id => {
    function filterArray(number, index) {
      if (id === index) {
        return false;
      }
      else return true;
    }
    const updatedBox = this.state.boxes.filter(filterArray);
    this.setState({ boxes: updatedBox });
  }

  onIncrement = (id) => {
    const newArr = [...this.state.boxes];
    newArr[id]++;

    this.setState({ boxes: newArr })
  }

  onDecrement = (id) => {
    const newArr = [...this.state.boxes];
    if (newArr[id] < 1) {

      return false;

    }
    if (newArr[id] === -1) {

      return false;

    }
    else {
      newArr[id]--;

    }
    // newArr[id]--;

    this.setState({ boxes: newArr })


  }

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center ht">
        <div>
          <div>
            <button className="btn btn-dark ms-3 mb-3" onClick={this.createBox}>
              Add new counter
            </button>
          </div>
          <div>
            {this.state.boxes.map((number, index) => (
              <div key={index}>
                <Box num={number} id={index} onDelete={this.onDelete} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
