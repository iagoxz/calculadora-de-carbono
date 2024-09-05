import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; 
import bgforest from '../assets/bgforest.png';
import logo from '../assets/logo.png';

export default function Quests({ navigation, route }) {
  const userName = route.params?.userName || 'Usuário';

  const [residentsOpen, setResidentsOpen] = useState(false);
  const [residents, setResidents] = useState(null);
  const [residentsItems, setResidentsItems] = useState([
    { label: '1 a 2 pessoas', value: '1-2', tco2e: 0.5 },  // 0.25 * 2
    { label: '3 a 4 pessoas', value: '3-4', tco2e: 1 },    // 0.25 * 4
    { label: '5 ou mais pessoas', value: '5+', tco2e: 1.25 }, // 0.25 * 5
  ]);

  const [flightsOpen, setFlightsOpen] = useState(false);
  const [flights, setFlights] = useState(null);
  const [flightsItems, setFlightsItems] = useState([
    { label: 'Nenhuma', value: '0', tco2e: 0 },
    { label: '1 a 2 viagens', value: '1-2', tco2e: 0.7 },  // 0.35 * 2
    { label: '3 ou mais viagens', value: '3+', tco2e: 1.05 }, // 0.35 * 3
  ]);

  const [shoppingOpen, setShoppingOpen] = useState(false);
  const [shoppingFrequency, setShoppingFrequency] = useState(null);
  const [shoppingItems, setShoppingItems] = useState([
    { label: 'Nunca', value: 'never', tco2e: 0 },
    { label: 'Raramente', value: 'rarely', tco2e: 0.3 },
    { label: 'Frequentemente', value: 'frequently', tco2e: 0.5 },
  ]);

  const [wasteOpen, setWasteOpen] = useState(false);
  const [wasteDisposal, setWasteDisposal] = useState(null);
  const [wasteItems, setWasteItems] = useState([
    { label: 'Reciclagem', value: 'recycling', tco2e: 0 },
    { label: 'Lixo Comum', value: 'common', tco2e: 0.2 },
    { label: 'Outro', value: 'other', tco2e: 0.15 },
  ]);

  const calculateTCO2e = () => {
    let totalTCO2e = 0;

    // Calcula o tCO2e com base nas seleções do usuário
    if (residents) {
      const selectedResidents = residentsItems.find(item => item.value === residents);
      totalTCO2e += selectedResidents?.tco2e || 0;
    }

    if (flights) {
      const selectedFlights = flightsItems.find(item => item.value === flights);
      totalTCO2e += selectedFlights?.tco2e || 0;
    }

    if (shoppingFrequency) {
      const selectedShopping = shoppingItems.find(item => item.value === shoppingFrequency);
      totalTCO2e += selectedShopping?.tco2e || 0;
    }

    if (wasteDisposal) {
      const selectedWaste = wasteItems.find(item => item.value === wasteDisposal);
      totalTCO2e += selectedWaste?.tco2e || 0;
    }

    return totalTCO2e;
  };

  const handleNext = () => {
    const totalTCO2e = calculateTCO2e();
    navigation.navigate('ResultScreen', {
      userName: userName,
      totalTCO2e: totalTCO2e,
    });
  };

  return (
    <ImageBackground source={bgforest} style={styles.background}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.card}>
          <Text style={styles.label}>Informe seus dados:</Text>

          {/* Dropdown para número de residentes */}
          <View style={[styles.inputContainer, { zIndex: 4000 }]}>
            <Text style={styles.inputLabel}>Quantas pessoas moram com você?</Text>
            <DropDownPicker
              open={residentsOpen}
              value={residents}
              items={residentsItems}
              setOpen={setResidentsOpen}
              setValue={setResidents}
              setItems={setResidentsItems}
              style={styles.dropdown}
              placeholder="Selecione uma opção"
            />
          </View>

          {/* Dropdown para frequência de viagens aéreas */}
          <View style={[styles.inputContainer, { zIndex: 3000 }]}>
            <Text style={styles.inputLabel}>Quantas viagens aéreas você faz por ano?</Text>
            <DropDownPicker
              open={flightsOpen}
              value={flights}
              items={flightsItems}
              setOpen={setFlightsOpen}
              setValue={setFlights}
              setItems={setFlightsItems}
              style={styles.dropdown}
              placeholder="Selecione uma opção"
            />
          </View>

          {/* Dropdown para frequência de compras no shopping */}
          <View style={[styles.inputContainer, { zIndex: 2000 }]}>
            <Text style={styles.inputLabel}>Com qual frequência você faz compras no Shopping?</Text>
            <DropDownPicker
              open={shoppingOpen}
              value={shoppingFrequency}
              items={shoppingItems}
              setOpen={setShoppingOpen}
              setValue={setShoppingFrequency}
              setItems={setShoppingItems}
              style={styles.dropdown}
              placeholder="Selecione uma opção"
            />
          </View>

          {/* Dropdown para descarte de resíduos */}
          <View style={[styles.inputContainer, { zIndex: 1000 }]}>
            <Text style={styles.inputLabel}>Como você descarta seus resíduos?</Text>
            <DropDownPicker
              open={wasteOpen}
              value={wasteDisposal}
              items={wasteItems}
              setOpen={setWasteOpen}
              setValue={setWasteDisposal}
              setItems={setWasteItems}
              style={styles.dropdown}
              placeholder="Selecione uma opção"
            />
          </View>

          <TouchableOpacity 
            style={styles.nextButton}
            onPress={handleNext} 
          >
            <Text style={styles.nextButtonText}>PRÓXIMO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const { height, width } = Dimensions.get('window');  
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
  dropdown: {
    width: '100%',
    marginBottom: 10,
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
