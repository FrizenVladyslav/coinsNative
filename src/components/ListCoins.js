import React, {Fragment, Component} from 'react';
import {List, Text} from 'react-native-elements';
import axios  from 'axios';

import ListItem from "./ListCoinsItem";

export default class ListCoins extends Component {

  state = {
    data: [],
    loading: true,
  }

  componentWillMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti', {
      params: {
        fsyms: 'ETH,DASH,BTC,REP',
        tsyms: 'USD',
      }
    }).then(response => {
      for (const prop in response.data) {
        this.setState({data: [...this.state.data, 
          {
            name: prop,
            price: response.data[prop],
          }
        ], loading: false});
      }
    }).catch(error => {
      this.setState({loading: false});
      throw `Ошибка получения данных по крипте: ${error}`;
    })
  }

  render() {
    return (
        <Fragment>
      
          {
            this.state.loading? <Text h4>Загрузка...</Text> :

            !this.state.data.length? <Text h4>Ошибка получения данных</Text> :

            <List> 
              {
                this.state.data.map((coin, index) => (
                  <ListItem
                    key={index}
                    name = {coin.name}
                    price = {coin.price.USD}
                  />
                ))
              }
            </List>
          }
        </Fragment>
    )
  }
}

