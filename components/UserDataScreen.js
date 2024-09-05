import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import bgforest from '../assets/bgforest.png';
import logo from '../assets/logo.png';

export default function UserDataScreen({ navigation }) {
  const [name, setName] = useState(''); // Estado para armazenar o nome do usuário
  const [email, setEmail] = useState(''); // Estado para armazenar o email do usuário
  const [phone, setPhone] = useState(''); // Estado para armazenar o telefone do usuário

  return (
    <ImageBackground 
      source={bgforest}  
      style={styles.background}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.card}>
          <Text style={styles.label}>Informe seus dados:</Text>

          {/* Nome e Sobrenome */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome e Sobrenome</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite seu nome completo" 
              value={name}
              onChangeText={setName} // Atualiza o estado do nome
            />
          </View>

          {/* E-mail */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite seu e-mail" 
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail} // Atualiza o estado do email
            />
          </View>

          {/* Telefone */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Telefone</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite seu telefone" 
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone} // Atualiza o estado do telefone
            />
          </View>

          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('Quests', { userName: name })} // Passa o nome para a próxima tela
          >
            <Text style={styles.nextButtonText}>PRÓXIMO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const { height, width } = Dimensions.get('window');  // Pegue as dimensões da tela

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20, 
  },
  logo: {
    width: 220,
    height: 50,
    top: 103,
    resizeMode: 'contain',
    marginVertical: 20,
    marginTop: 50,
  },
  card: {
    width: '110%', 
    height: height * 0.7,  
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 30,  
    borderTopRightRadius: 30,  
    borderBottomLeftRadius: 0,  
    borderBottomRightRadius: 0,  
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  label: {
    fontSize: 20,
    color: '#000',
    marginTop: 10,
    paddingVertical: 10,
    alignSelf: 'flex-start',  
    width: '100%',  
  },
  inputContainer: {
    width: '100%',
    marginTop: 30, 
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  nextButton: {
    width: 343,
    height: 64,
    justifyContent: 'center',
    backgroundColor: '#1F4F89',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 13,
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  }
});
