import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import InventoryItem from '../../comps/InventoryItem';
import { styles } from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import {data} from './utils'


const numColumns = 2;
const Insure = () => {

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
      };

    const renderItem = ({ item }) => (
        <InventoryItem item={item} />
      );

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inventory</Text>
        <View>
            <Entypo name="circle-with-plus" size={30} color={"blue"} />
        </View>
      </View>
     
      <FlatList
        // data={data}
        data={formatData(data, numColumns)}
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
      {/* <ScrollView >
      <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', flexWrap: 'wrap'}}>
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      </View>
      </ScrollView> */}
    </View>
  );
};

export default Insure;
