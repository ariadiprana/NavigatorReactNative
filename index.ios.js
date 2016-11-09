/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import PageOne from './components/PageOne.js'
import PageTwo from './components/PageTwo.js'
import PageThree from './components/PageThree.js'

export default class NavigatorProject extends Component {
  _renderScrene(route, navigator){
    if(route.id ==1){
      return <PageOne navigator={navigator} />
    } else if(route.id == 2){
      return <PageTwo navigator={navigator} />
    } else if(route.id == 3){
      return <PageThree navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id:1}}
        renderScene={this._renderScrene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigatorProject', () => NavigatorProject);
