import React from 'react';
import { StyleSheet, View,} from 'react-native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Slider from './src/components/Slider';
import CrimsonButton from './src/components/CrimsonButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Slider />
        <View style={styles.containerMenu}>
          <View style={styles.containerSubMenu}>
            <CrimsonButton text='1'/>
            <CrimsonButton text='2'/>
            <CrimsonButton text='3'/>
            <CrimsonButton text='4'/>
          </View>
          <View style={styles.containerSubMenu}>
            <CrimsonButton text='5'/>
            <CrimsonButton text='6'/>
            <CrimsonButton text='7'/>
            <CrimsonButton text='8'/>
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMenu: {
    flex: 2,
    margin: 8,
    backgroundColor: '#212121',
    borderRadius: 3,
  },
  containerSubMenu: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
});
// Gus Nando 100%
// Saya Ganteng
