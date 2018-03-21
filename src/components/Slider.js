import React from 'react';
import {
  View,
  ToastAndroid,
  Text,
  StyleSheet,
} from 'react-native';

class Slider extends React.Component {
  render() {
    return (
      <View style={styles.containerSlider}>
        <Text style={styles.slider}>SLIDER</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSlider:{
    flex: 2,
    backgroundColor: '#03A9F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    fontSize: 42,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});


export default Slider;
