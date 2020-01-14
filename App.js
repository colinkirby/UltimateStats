import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FieldScreen from './src/scenes/FieldScreen'


const MainNavigator = createStackNavigator({
  Field: {screen: FieldScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
