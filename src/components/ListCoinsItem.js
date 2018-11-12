import React from 'react';
import {ListItem} from 'react-native-elements';

export default function ListCoinsItem(props) {
  const {name, price} = props;
  return (
    <ListItem
      roundAvatar
      title={name}
      subtitle={`Курс: ${price}`}
      leftIcon={{name: 'bitcoin', type: 'font-awesome'}}
    />
  )
}
