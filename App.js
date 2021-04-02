import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native';

//Testing 04/02/2021
//2:52pm

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    }
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = this.state.inputValue * currencyPerRupee[currency];

    this.setState({resultValue: result.toFixed(2)});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {this.state.resultValue}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} 
            selectionColor='#FFF'
            keyboardType='numeric'
            placeholder='Enter value'
            value={this.state.inputValue}
            onChangeText={inputValue => this.setState({inputValue})}
            />
          </View>
            <View style={styles.converterButtonContainer}>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("DOLLAR")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("EURO")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("POUND")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("RUBEL")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>Rubel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("AUSDOLLAR")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>AUS</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("CANDOLLAR")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>CA$</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("YEN")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("DINAR")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={ () => this.buttonPressed("BITCOIN")}
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>BTC</Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20
  },  
  screenview: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0a79de",
    alignItems: 'center',
    borderWidth: 3
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#c1c1c1',
    backgroundColor: '#0a79de'
  },
  input: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  converterButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#c1c1c1',
    borderWidth: 2
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a79df',
    height: 100,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    width: '33.3%'
  },
  converterButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
