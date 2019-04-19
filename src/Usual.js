import React, { Component } from 'react';
import simpleHoc from './simpleHoc';

class Usual extends Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div>
        Usual
      </div>
    )
  }
}
export default simpleHoc(Usual);