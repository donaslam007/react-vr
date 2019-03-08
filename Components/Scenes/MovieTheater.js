import React from 'react';
import {
  View,
  Video
} from 'react-vr';
import MovieProjector from './Layouts/MovieProjector.js';

//Scene
class MovieTheater extends React.Component {
  render() {
    return (
      <MovieProjector buttonText={this.props.buttonText} updateScene={this.props.updateScene} scene={this.props.scene}/>
    )
  }
}

module.exports = MovieTheater;
