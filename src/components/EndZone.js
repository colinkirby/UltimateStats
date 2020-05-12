import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

//TODO
//Only one endzone is working as intended, likely a styling issue
//For now one endzone is replaced with a touchable rectangle
export class EndZone extends React.Component {
  state = {
    endZoneMode: 'scaled',
  }

  renderEndZone() {
    if(this.state.endZoneMode == 'scaled') {
      return (
        <TouchableOpacity style = {styles.scaled} onPress = {this.handlePress}>
          <View style = {styles.scaled}/>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableWithoutFeedback style = {styles.expanded} onPress = {this.handlePress}>
          <View style = {styles.expanded}/>
        </TouchableWithoutFeedback>
      );
    }
  }

  handlePress = () => {
    if(this.state.endZoneMode == 'scaled') {
      this.setState({
        endZoneMode: 'expanded'
      });
    } else {
      this.setState({
        endZoneMode: 'scaled'
      })
    }
  }

  render() {

    return(
      <React.Fragment>
        {this.renderEndZone()}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: zoneHeight,
    width: endZoneWidth,
    backgroundColor: 'red',
  },
  scaled: {
    height: zoneHeight,
    width: endZoneWidth,
    backgroundColor: '#094408', 
  },
  expanded: {
    height: zoneHeight,
    width: endZoneWidthExp,
    backgroundColor: '#094408', 
  },  
});