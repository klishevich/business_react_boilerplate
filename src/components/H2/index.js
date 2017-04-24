import React, { Component } from 'react';
import './H2.css';

class H2 extends Component {
  render() {
    return (
      <div className="H2">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default H2;
