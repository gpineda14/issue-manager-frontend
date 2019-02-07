import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image } from 'react-konva';
import './App.css';

class ProjectImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }
  componentDidMount() {
    const image = new window.Image();
    image.src = 'https://konvajs.github.io/assets/yoda.jpg';
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} height={700} width={700}/>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      mouseUp: false,
      posX: 0,
      posY: 0,
      issueCoordinates: []
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown = (event) => {
    if (event.target.className === 'Image') {
      const stage = event.target.getStage();
      const mousePos = stage.getPointerPosition();
      this.setState({
        mouseDown: true,
        posX: mousePos.x,
        posY: mousePos.y
      });
      console.log(this.state);
      return
    }
  }

  handleMouseMove = (event) => {

  }

  render() {
    return(
      <Stage width={700} height={700} onMouseDown={this.handleMouseDown}>
        <Layer>
          <ProjectImage />
        </Layer>
        <Layer>
        </Layer>
      </Stage>
    );
  }
}

export default App;
