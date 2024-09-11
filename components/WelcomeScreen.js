import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import bg from '../assets/bg.jpeg';  


export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={bg}  
      style={styles.background}
    >
      <View style={styles.container}>
      
      </View>
      <TouchableOpacity 
        style={styles.touchArea} 
        onPress={() => navigation.navigate('InfoScreen')}
      >
        <Text style={styles.continueText}>TOQUE PARA CONTINUAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchArea: {
    marginBottom: 50,
  },
  continueText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  }
});
