import React, { Component } from "react";
import { connect } from "react-redux";

export class Start extends Component {
  render() {
    return (
      <div className="start">
        <h1>Start</h1>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    count: state.count
  }),
  dispatch => ({
    increment: () => dispatch.count.incrementAsync(2)
  })
)(Start);
