import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles  from './style'

const Title = () => {
  return (
    <View>
      <LinearGradient
        style={styles.boxTitle}
        colors={['#ff0505', '#1e1313', '#000000']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={styles.text} >Calc-Temp</Text>
        <Image
        source={require('../../../assets/IMG-20230629-WA0019.jpg')}
        style={styles.img}
      />
      </LinearGradient>
    </View>
  );
};

export default Title;