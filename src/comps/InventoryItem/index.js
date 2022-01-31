import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles'

const InventoryItem = ({item}) => {
  return (
    <View style={styles.item}>
        <Image 
            style={styles.image}
            source={{
              uri: item?.image,
            }}
        />
      <Text style={[styles.text, {fontWeight: 'bold'}]}>{item?.name}</Text>
      <Text style={styles.text}>${item?.price}</Text>
    </View>
  );
};

export default InventoryItem;
