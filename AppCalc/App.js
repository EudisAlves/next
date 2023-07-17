
import Title from './src/components/Title/index.jsx'
import SelectCarne from './src/components/SelectCarne/index.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <SelectCarne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
