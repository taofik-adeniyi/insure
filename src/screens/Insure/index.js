import React, {useRef, useState} from 'react';
import {View, Text, Pressable, TouchableOpacity, FlatList} from 'react-native';
import InventoryItem from '../../comps/InventoryItem';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {data} from './utils';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {InputDescription, InputText, InputNumber, MySelect} from './comps/Input';



const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const numColumns = 2;

const Insure = () => {
  const bottomSheet = useRef();

  const [text, onChangeText] = useState('');
  const [desc, onChangeDesc] = useState('');
  const [number, onChangeNumber] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Select a Category');

  const allRequired = text && desc && number && selectedValue ? true : false;
  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderItem = ({item}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return <InventoryItem item={item} />;
  };

  return (
    <View style={styles.page}>
      <BottomSheet
        // hasDraggableIcon
        ref={bottomSheet}
        height={720}
        sheetBackgroundColor="#cfcdcc">
        <View
          style={{
            width: '100%',
            padding: 10,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={() => bottomSheet.current.close()}>
            <Text style={{color: 'blue'}}>Cancel</Text>
          </Pressable>
          <Pressable>
            <Text style={{color: allRequired ? 'blue' : 'grey'}}>Add</Text>
          </Pressable>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons name="camera" size={50} color={'blue'} />
          <Text style={{fontSize: 16, fontWeight: '700', paddingTop: 10}}>
            Add photo
          </Text>
        </View>

        <InputText value={text} onChange={onChangeText} />
        
        <MySelect data={countries} setSelectedValue={setSelectedValue} />
        
        <InputNumber title="Value" value={number} onChange={onChangeNumber} />
        <InputDescription
          title="Description"
          value={desc}
          onChange={onChangeDesc}
        />
      </BottomSheet>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inventory</Text>
        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <Entypo name="circle-with-plus" size={30} color={'blue'} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={formatData(data, numColumns)}
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
    </View>
  );
};

export default Insure;
