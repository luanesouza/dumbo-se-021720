import React from 'react'
import { getLoggingInfo } from '../utils/logger';

class Grandchild extends React.Component {
  constructor() {
    super()
    console.log(...getLoggingInfo(this))
  }

  componentDidMount() {
    console.log(...getLoggingInfo(this))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(...getLoggingInfo(this), prevProps, prevState)
  }

  componentWillUnmount() {
    console.log(...getLoggingInfo(this))
  }

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 