import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import axios from 'axios';
import { url } from "../constans";
import ListCoins from './ListCoins';
import { List, ListItem } from 'react-native-elements'

import Header from "./Header";



type Props = {};
export default class App extends Component<Props> {
  
  componentWillMount(){
    axios.get(url).then(response => {
      this.setState({data: response.data})
    })
  }
  componentDidMount() {
    console.log('url', url);
  }

  render() {
    return (
      <View>
        <Header />
        <ListCoins />
          

      </View>
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
