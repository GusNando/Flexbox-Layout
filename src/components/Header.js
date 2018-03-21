import React from 'react';
import {
  View,
  ToastAndroid,
  Text,
  StyleSheet,
} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={[styles.header]}>Pendidikan Teknik Informatika</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader:{
    flex: 1,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
  },
  header: {
    fontSize: 42,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});


export default Header;
