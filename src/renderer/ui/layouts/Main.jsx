import React, { Component } from 'react'
import os from 'os'

export default class Main extends Component {
  render () {
    const style = { color: 'red' }
    return (
      <div style={style}>
        Hello world! This paragraph is {style?.color}, and is running on {os.hostname()}.
      </div>
    )
  }
}
