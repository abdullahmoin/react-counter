import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class Box extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //   id: id,
      //   onDelete: onDelete,
      //   onIncrement: onIncrement,
      btnColorClass: "btn btn-secondary",
      // };
    }
  }

  increment = () => {
    this.props.onIncrement(this.props.id);
    const newState = { btnColorClass: "btn btn-secondary" };
    this.setState(newState);
  }

  decrement = () => {


    const myDecrement = this.props.onDecrement(this.props.id);

    // const number = this.state.number;
    // if (number > 0) {
    //   const newNumber = this.state.number - 1;
    //   const newState = { number: newNumber };
    //   this.setState(newState);
    // }
    // if (number === 1) {
    //   const newState = { btnColorClass: "btn btn-warning" };
    //   this.setState(newState);
    // }
    if (myDecrement === false) {
      const newState = { btnColorClass: "btn btn-warning" };
      this.setState(newState);
    }
    else {

    }




  };

  deleteBox = () => {
    const { id } = this.props;
    this.props.onDelete(id);

  }

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center card-height">
        <button className={this.state.btnColorClass} onClick={this.decrement}> - </button>
        <h1 className="me-5 ms-5"> {this.props.num}</h1>
        <button className="btn btn-secondary" onClick={this.increment}> + </button>
        <button className="btn btn-light ms-4 mt-1" onClick={this.deleteBox}> delete </button>
        <div></div>
      </div>
    );
  }
}
export default Box;
