import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {Disc} from './Disc';
import {PlayerModal} from './PlayerModal';
import {Stack} from '../data/Stack'

let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);
let stack = new Stack()

//Playing field (between endzones), manages state of disc and playermodal
export class Zone extends React.Component {
  constructor() {
    super();
    this.state = {
      playerModalVisible: false,
      discX: 0,
      discY: 0,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.updateDisc = this.updateDisc.bind(this);
    this.addEvent = this.addEvent.bind(this);

  }

  renderModal() {
    if(this.state.playerModalVisible) {
      return (
        <PlayerModal
          addEvent={this.addEvent}
          toggleModal={this.toggleModal}/>
      );
    } else {
      return( null );
    }
  }

  addEvent(type, name) {
    if(type == "throwaway") {
      name = stack.peek().name
    }
    stack.push(
      {"name": name,
       "type": type,
       "x": this.state.discX,
       "y": this.state.discY,
      }
    )

  }

  toggleModal() {
    this.setState({
      playerModalVisible: !this.state.playerModalVisible
    });
  }

  updateDisc(x, y) {
    this.setState({
      discX: x,
      discY: y,
    })
  }

  render() {

    return(
      <TouchableWithoutFeedback>
        <View style = {styles.zone}>
          {this.renderModal()}
          <Disc
            updateDisc={this.updateDisc}
            toggleModal={this.toggleModal}/>
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
