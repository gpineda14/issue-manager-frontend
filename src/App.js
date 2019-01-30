import React, { Component } from 'react';
import './App.css';

class ImageCanvas extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      const x = event.x;
      const y = event.y;
      console.log(x, y);
  }

  render() {
    return(
      <div className="canvas">
        <canvas id="canvas" onClick={(e) => this.handleClick(e.nativeEvent)}>
        </canvas>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <ImageCanvas />
    )
  }
}

export default App;
