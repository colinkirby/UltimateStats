import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import {Stack} from '../data/Stack'

const playerData = require('../data/players.json');


let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

// Modal pops up when the disc is released
// Player indicates who caught, dropped, or threw away the disc
export class PlayerModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: true,
    };
    //let players = JSON.parse(playerData);
  }

  //TODO
  //Add functionality to animate modal close

  pressEvent(type, name) {
    this.props.addEvent(type, name)
    this.props.toggleModal()
  }

  renderPlayers() {
    return playerData.map((player) => {
      return(
        <View key = {player.id} style={styles.modalRow}>
          <View style = {styles.nameBox}>
            <Text style={styles.nameText}> {player.name} </Text>
          </View>
          <TouchableOpacity style={styles.catchButton}
            onPress={() => this.pressEvent('catch', player.name)}>
            <Text> Catch </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropButton}
            onPress={() => this.pressEvent('drop', player.name)}>
            <Text> Drop </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    return(
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.props.toggleModal()}
        backdropOpacity={0}
        >
        <View style={styles.modalContainer}>
          {this.renderPlayers()}
          <TouchableOpacity style = {styles.throwawayButton}
            onPress={() => this.pressEvent('throwaway')}>
            <Text> Throwaway </Text>
          </TouchableOpacity>
        </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'relative',
    width: 250,
    left: 350,
    backgroundColor: '#bbc',
    opacity: 20,
    flex: 1,
    flexDirection: 'column',
  },
  modalRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  },
  nameBox: {
    width: 70,
    height: 35,
    padding: 10,
    backgroundColor: 'white'
  },
  nameText: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  catchButton: {
    width: 60,
    height: 35,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  dropButton: {
    width: 60,
    height: 35,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  throwawayButton: {
    width: 100,
    height: 35,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    borderRadius: 8,
  }
});
