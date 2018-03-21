import React from 'react';
import {
  ToastAndroid,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Footer extends React.Component {
  onPress = () => {
     ToastAndroid.show('http://pti.undiksha.ac.id/', ToastAndroid.SHORT);
  }
  render() {
    return (
      <TouchableOpacity style={styles.containerFooter} onPress={this.onPress}>
        <Text style={styles.footer}>#JaenKuliahdiPTI</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerFooter: {
    flex: 1,
    backgroundColor: 'crimson',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  footer: {
    fontSize: 42,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});


export default Footer;
