import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de perfil

export default function ResultScreen({ navigation, route }) {

  const userName = route.params?.userName || 'Usuário';
  const result = route.params?.result || 0.0;

  return (
    <View style={styles.background}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>


      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle" size={50} color="#636363" />
          <View>
            <Text style={styles.welcomeText}>Bem-Vindo,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
      </View>

  
      <View style={styles.divider}></View>

 
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Resultados</Text>
        <View style={styles.resultCircle}>
          <Text style={styles.result}>{result}</Text>
          <Text style={styles.resultText}> tCO₂e/ano</Text>
        </View>
      </View>

      {/* Botão para recalcular */}
      <TouchableOpacity style={styles.recalculateButton} onPress={() => navigation.navigate('UserDataScreen')}>
        <Text style={styles.recalculateButtonText}>Calcular Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const { height, width } = Dimensions.get('window'); // Dimensões da tela

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000', 
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 90,
    paddingHorizontal: 25,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

  },
  welcomeText: {
    fontSize: 15,
    lineHeight: 14,
    fontWeight: 400,
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
  },
  userName: {
    fontSize: 17,
    lineHeight: 16,
    pragraph: 8,
    fontWeight: 400,
    color: '#fff',
    paddingVertical: 3,
    marginLeft: 10,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#333', 
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  resultLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  resultCircle: {
    width: 270,
    height: 270,
    borderRadius: 160,
    borderWidth: 4,
    borderColor: '#636363',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    lineHeight: 18,
    color: '#fff',
    fontWeight: 400,
  },
  result: {
    fontSize: 61,
    color: '#fff',
    lineHeight: 58,
  },
  recalculateButton: {
    width: 265,
    height: 64,  
    marginTop: 200,
    backgroundColor: '#61B135', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recalculateButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
