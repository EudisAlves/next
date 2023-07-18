
import { StyleSheet, View} from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <AppNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
