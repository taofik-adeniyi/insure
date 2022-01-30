import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';


const AddInventory = () => {

  return (
     <View style={{marginTop: 100}}>
          <Text style={{color: 'red'}}>Capture</Text>
     </View>
  );
};

export default AddInventory;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})