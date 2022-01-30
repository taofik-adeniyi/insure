import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import InventoryItem from '../../comps/InventoryItem';
import { styles } from './styles'
import Entypo from 'react-native-vector-icons/Entypo';


const Insure = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inventory</Text>
        <View>
            <Entypo name="circle-with-plus" size={30} color={"blue"} />
        </View>
      </View>
      <ScrollView >
      <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', flexWrap: 'wrap'}}>
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      </View>
      </ScrollView>
    </View>
  );
};

export default Insure;
