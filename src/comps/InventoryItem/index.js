import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles'

const InventoryItem = () => {
  return (
    <View style={styles.item}>
        <Image 
            style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
      <Text style={[styles.text, {fontWeight: 'bold'}]}>Name of prod</Text>
      <Text style={styles.text}>$23.7</Text>
    </View>
  );
};

export default InventoryItem;
