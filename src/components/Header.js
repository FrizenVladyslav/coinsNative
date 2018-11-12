import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import {Header} from 'react-native-elements';

const PageHeader = props => {

  return(
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'THIS IS HEADER', style: { color: '#fff' } }}
      style = {styles.header}
    />

  );
}

const styles =  StyleSheet.create({
  header: {
    // textAlign: 'center',
    // backgroundColor: 'aqua',
    // height: 55,
    // display: 'flex',
    // textAlign: 'left',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // textAlignVertical: 'bottom',
    // padding: 10,
    // paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: {width: 20, height: 10},
    elevation: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  }
  
})

export default PageHeader;