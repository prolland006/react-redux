import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { val, inc, dec } = this.props
    return (
      <p>
        {val} times        
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </p>
    )
  }
}

export default Counter
