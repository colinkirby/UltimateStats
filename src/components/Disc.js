import React from "react";
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions
} from "react-native";
import { createResponder } from 'react-native-gesture-responder';

//TODO
//Use redux to use window dimensions as container
let { width, height } = Dimensions.get('window');
zoneHeight = Math.round(height - 49);
zoneWidth = Math.round(zoneHeight * 1.75);
endZoneWidth = Math.round((width - zoneWidth) /2)
endZoneWidthExp = Math.round(zoneHeight * 0.625);

//Drag disc around, on release opens the player modal
export class Disc extends React.Component {
  constructor() {
    super();
    this.state = {
      x: new Animated.Value(0),
      y: new Animated.Value(0),
    };

    this.Responder = createResponder({
      onStartShouldSetResponder: () => true,
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onResponderMove: (evt, gestureState) => {
        this.pan(gestureState)
      },
      onResponderRelease: (evt, gestureState) => {
        let centerX = this.state.x._value + CIRCLE_RADIUS;
        let centerY = this.state.y._value + CIRCLE_RADIUS;
        this.props.updateDisc(centerX, centerY)
        this.props.toggleModal();
      },
      onPanResponderTerminationRequest: () => true,
    })
  }

  pan = (gestureState) => {
    const { x, y } = this.state
    const maxX = zoneWidth - CIRCLE_RADIUS
    const minX = -CIRCLE_RADIUS
    const maxY = zoneHeight - CIRCLE_RADIUS
    const minY = -CIRCLE_RADIUS

    const xDiff = gestureState.moveX - gestureState.previousMoveX
    const yDiff = gestureState.moveY - gestureState.previousMoveY
    let newX = x._value + xDiff
    let newY = y._value + yDiff

    if (newX < minX) {
      newX = minX
    } else if (newX > maxX) {
      newX = maxX
    }

    if (newY < minY) {
      newY = minY
    } else if (newY > maxY) {
      newY = maxY
    }

    x.setValue(newX)
    y.setValue(newY)
  }

  render() {
    const {
      x, y,
    } = this.state
    const imageStyle = { left: x, top: y }

    return (
      <View
        style={styles.container}
      >
        <Animated.View
          {...this.Responder}
          resizeMode={'contain'}
          style={[styles.circle, imageStyle]}
        />
    </View>

    );
  }
}

const CIRCLE_RADIUS = 15;
const CIRCLE_DIAMETER = CIRCLE_RADIUS * 2
const styles = StyleSheet.create({
  circle: {
    backgroundColor: "white",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});