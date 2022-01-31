import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const MyCameara = () => {
    
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: '700', fontSize: 30}}>Camera</Text>
    </View>
  );
};

export default MyCameara;
