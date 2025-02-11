import React from 'react';
import {
  Video,
  View
} from 'react-vr';
import Movie from './Elements/Movie.js';
import Button from './Elements/Button.js';

//Layout
class MovieProjector extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#cccccc',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, 5]}]
      }}>
        <Movie/>
        <Button buttonText={this.props.buttonText} updateScene={this.props.updateScene} scene={this.props.scene}/>
      </View>
    )
  }
}


module.exports = MovieProjector;
