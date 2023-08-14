import React from 'react';
import { AppRegistry } from 'react-native';
import { View } from 'react-native';
import { name as appName } from './app.json';
import BoxPlay from './src/BoxPlay';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BoxPlay />
    </View>
  );
};

export default App;
