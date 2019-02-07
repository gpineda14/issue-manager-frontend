import React, { Component } from 'react';
import Konva from 'konva';
import ProjectImage from './components/ProjectImage'
import { Stage, Layer, Image } from 'react-konva';
import './App.css';

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

  handleMouseUp = (event) => {
    
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
