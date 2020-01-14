import React from 'react'
import { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import MatchStack from '../services/MatchStack'
const playerData = require('../data/players.json');


let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

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
  


  renderPlayers() {
    return playerData.map((player) => {
      return(
        <View style={styles.modalRow}>
          <View style = {styles.nameBox}>
            <Text style={styles.nameText}> {player.name} </Text>
          </View>
          <TouchableOpacity style={styles.catchButton}>
            <Text> Catch </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropButton}>
            <Text> Drop </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    console.log(playerData[1].name)

    return(
      <Modal 
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.props.toggleModal()}
        backdropOpacity={0}
        >
        <View style={styles.modalContainer}>
          {this.renderPlayers()}
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
    flex: 1,
    flexDirection: 'column',
  },
  modalRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  nameBox: {
    width: 70,
    height: 40,
    padding: 10,
    backgroundColor: 'white'
  },
  nameText: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },  
  catchButton: {
    width: 60,
    height: 40,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  dropButton: {
    width: 60,
    height: 40,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  }
});