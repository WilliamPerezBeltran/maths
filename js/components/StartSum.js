import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import store from "./Store";
import Voice from "react-native-voice";

class StartSum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    Voice.onSpeechResults = this.onSpeechResults;
  }

  sumStart = () => {
    this.clearState();
    this.startRecognizing();

    if (store.getState().digit == 0) {
      // Sum of a digit
      this.setSumRange(0, 9);
    } else if (store.getState().digit == 1) {
      // Sum of two digits
      this.setSumRange(10, 99);
    } else if (store.getState().digit == 2) {
      // Sum of three digits
      this.setSumRange(100, 999);
    } else if (store.getState().digit == 3) {
      // Sum of four digits
      this.setSumRange(1000, 9999);
    }
  };

  setSumRange = (lowerLimit, upperLimit) => {
    try {
      const a = this.getRandomInt(lowerLimit, upperLimit);
      const b = this.getRandomInt(lowerLimit, upperLimit);
      const result = a + b;

      store.dispatch({
        type: "getAgetBgetResult",
        a: a,
        b: b,
        result: result
      });
    } catch (e) {
      console.error(e);
    }
  };

  clearState = async () => {
    try {
      store.dispatch({
        type: "clearState",
        voiceResult: "?"
      });
    } catch (e) {
      console.error(e);
    }
  };

  startRecognizing = async () => {
    try {
      await Voice.start("es-ES");
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log("onSpeechResults: ", e);
    this.setState({
      results: e.value
    });

    store.dispatch({
      type: "voiceResult",
      voiceResult: e.value
    });
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.sumStart()}>
          <Text style={styles.text}>start sum</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var dimension = {
  width: Dimensions.get("window").width / 3,
  height: Dimensions.get("window").height / 13
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: dimension.width,
    height: 60,
    borderWidth: 2,
    borderColor: "hsla(223, 12%, 89%, 1)",
    borderRadius: 5,
    backgroundColor: "#B8B8B8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default StartSum;
