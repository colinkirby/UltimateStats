import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { EndZone } from './EndZone';
import { Zone } from './Zone'


let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

//Entire field, including endzones and zones
export class Field extends React.Component {

  render() {

    return(
      <View style = {styles.container}>
        <Zone/>
        <EndZone style = {styles.endZoneLeft}/>
        <TouchableOpacity style = {styles.endZoneRight} onPress = {this.handlePress}>
          <View style = {styles.scaled}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: width,
    height: zoneHeight,
    backgroundColor: 'blue',
  },

  endZoneLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#217B00'

  },
  endZoneRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: zoneHeight,
    width: endZoneWidth,
    backgroundColor: '#217B00',
  },
});
