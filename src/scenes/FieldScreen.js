
import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Field } from '../components/Field';

let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

export default class FieldScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    componentDidMount() {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }

    render() {

      return (
        <View>
          <StatusBar hidden = {true} />
          <View style ={styles.header}/>
          <Field/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  screen: {

  },
  header: {
    height: 49,
  },
  field: {
    flex: 1,
    flexDirection: 'row',
  },

});
