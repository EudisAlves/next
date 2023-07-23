import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoxPlay from './src/BoxPlay';

export default function App() {
  return (
    <View style={styles.container}>
     <BoxPlay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
