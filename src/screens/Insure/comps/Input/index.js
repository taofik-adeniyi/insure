import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from './styles'

export const InputText = ({title='Name', value, onChange}) => {
  const [focused, setFocused] = useState(false)
  const whenFocused = {borderColor: focused ? 'blue': null, borderWidth: focused ? 1:null}
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={[whenFocused, styles.input]}
        placeholder="Bracelet"
        onChangeText={onChange}
        value={value}
        keyboardType="number-pad"
        // onPressIn={()=>setFocused(true)}
        // onBlur={()=>setFocused(true)}
        // onPressOut={()=>setFocused(false)}
      />
    </View>
  );
};

export const InputDescription = ({title='Name', value, onChange}) => {
  const [focused, setFocused] = useState(false)
  const whenFocused = {borderColor: focused ? 'blue': null, borderWidth: focused ? 1:null}
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput
          style={[styles.desc, whenFocused]}
          placeholder="Optional"
          onChangeText={onChange}
          value={value}
          keyboardType="number-pad"
          multiline
          // onFocus={()=>setFocused(!focused)}
        />
      </View>
    );
  };

  export const InputNumber = ({title='Value', value, onChange}) => {
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder="700"
          onChangeText={onChange}
          value={value}
          keyboardType="numeric"
          type="number"
          keyboardType="number-pad"
        />
      </View>
    );
  };

  export const MySelect = ({title="Select a category", data, setSelectedValue}) => {
    return (
      <View style={{margin: 10}}>
        <Text style={{fontWeight: "700", paddingVertical: 5}}>{title}</Text>
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            setSelectedValue(selectedItem)
            console.warn(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          rowStyle={{width: '100%'}}
          style={{width: 300}}
          // dropdownStyle={{width: '100%'}}
          buttonTextStyle={{textAlign: 'left', fontSize: 16}}
          buttonStyle={{width: '100%', height: 45, borderRadius: 5, backgroundColor: '#ffffff', textAlign: 'left'}}
        />
        </View>
    )
  }