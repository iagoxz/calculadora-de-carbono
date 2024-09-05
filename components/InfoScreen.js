import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import bg2 from '../assets/bg2.png';
import logo from '../assets/logo.png'; 
export default function InfoScreen({ navigation }) {
  return (
   
    <ImageBackground 
      source={bg2}  
      style={styles.background}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Como calculamos?</Text>
          <Text style={styles.description}>
            Calcularemos suas emissões com base em suas atividades e na sua rotina de vida.
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('UserDataScreen')}
        >
          <Text style={styles.nextButtonText}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoContainer: {
    marginTop: 550,  
    alignItems: 'center',
    
  },
  logo: {
    width: 220,  
    height: 50,
    top: 101,
    resizeMode: 'contain', 
    marginBottom: 9,
  },
  infoText: {
    fontSize: 25 ,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: 300,
    height: 50,
     justifyContent: 'center'
  },
  nextButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  }
});
