import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {Disc} from './Disc';
import {PlayerModal} from './PlayerModal';

let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

export class Zone extends React.Component {
  constructor() {
    super();
    this.state = {
      playerModalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  renderModal() {
    if(this.state.playerModalVisible) {
      return (
        <PlayerModal toggleModal={this.toggleModal}/>
      );
    } else {
      return( null );
    }
  }

  toggleModal() {
    this.setState({
      playerModalVisible: !this.state.playerModalVisible
    });
  }

  render() {

    return(
      <TouchableWithoutFeedback>
        <View style = {styles.zone}>
          {this.renderModal()}
          <Disc toggleModal={this.toggleModal}/>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  zone: {
    position: 'absolute',
    top: 0,
    left: endZoneWidth,
    backgroundColor: '#29A500', 
    width: zoneWidth,
    height: zoneHeight,
  },
});