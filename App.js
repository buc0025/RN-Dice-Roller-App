import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: require("./src/images/dice1.png")
    }
    this.dice = {
      uri: require("./src/images/dice1.png")
    }
  } 

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  getRandomValue2 = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  playButtonPressed = () => {
    // Alert.alert("hey: " + this.getRandomValue());
    var rNumber = this.getRandomValue();
    var rNumber2 = this.getRandomValue2();

    // switch (rNumber) {
    //   case 1:
    //     this.setState({uri: require("./src/images/dice1.png") });
    //     break;
    //   case 2:
    //     this.setState({uri: require("./src/images/dice2.png") });
    //     break;
    //   case 3:
    //     this.setState({uri: require("./src/images/dice3.png") });
    //     break;
    //   case 4:
    //     this.setState({uri: require("./src/images/dice4.png") });
    //     break;
    //   case 5:
    //     this.setState({uri: require("./src/images/dice5.png") });
    //     break;
    //   case 6:
    //     this.setState({uri: require("./src/images/dice6.png") });
    //     break;
    // }
    switch (rNumber2) {
      case 1:
        this.setState({uri: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({uri: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({uri: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({uri: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({uri: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({uri: require("./src/images/dice6.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.twoDice}>
        <Image source={this.state.uri} />
        <Image source={this.state.uri} />
        </View>
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gameButton}>Play now</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: 'white'
  },
  twoDice: {
    flexDirection: 'row',
    
  }
});
