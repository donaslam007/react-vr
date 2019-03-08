import React from 'react';
import {
  Video,
  View,
  asset
} from 'react-vr';

//Element
class Movie extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 5}}>
        <Video style={{height:5}} source={asset('fireplace.mp4')} />
      </View>
    )
  }
}

module.exports = Movie;
