import React, { Component } from 'react';
import './App.css';

class ImageCanvas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const image_layer = this.refs.image_layer;
    const drawing_layer = this.refs.drawing_layer;

    const image_ctx = image_layer.getContext("2d");
    const drawing_ctx = drawing_layer.getContext("2d");

    const img = new Image();
    img.src = "https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png";
    img.onload = () => {
      image_ctx.drawImage(img, 0, 0, 500, 500);
    }
  }

  render() {
    return(
      <div className="canvas">
        <canvas ref="image_layer" className="image_layer">
        </canvas>
        <canvas ref="drawing_layer" className="drawing_layer">
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
