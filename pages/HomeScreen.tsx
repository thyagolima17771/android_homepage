import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import OrangeButton from '../componentes/button'; // Importe o componente OrangeButton
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      {/* Use o componente OrangeButton aqui */}
      <OrangeButton onPress={() => console.log("Button pressed")} title="Vamos começar!" />
    </View>
  );
}

export default HomeScreen;
