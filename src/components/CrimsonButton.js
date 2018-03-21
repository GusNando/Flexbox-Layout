import React from 'react';
import {
  View,
  ToastAndroid,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class CrimsonButton extends React.Component {
  onPress = (text) => {
      ToastAndroid.show('Button ' + text + ' Tapped!', ToastAndroid.SHORT);
  }
  render() {
    return (
      <TouchableOpacity style={styles.crimsonButton} onPress={this.onPress.bind(this, this.props.text)}><Text style={styles.crimsonButtonText}>{this.props.text}</Text></TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  crimsonButton: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  crimsonButtonText: {
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default CrimsonButton;
