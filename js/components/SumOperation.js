import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
import Sum from "./Sum";
import RadioButtons from "./RadioButtons";
import * as Constants from "../Constants";
import InputVoice from "./InputVoice";
import store from "./Store";

class SumOperation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      digit: "",
      a: "",
      b: ""
    };

    store.subscribe(() => {
      this.setState({
        digit: store.getState().digit,
        a: store.getState().a,
        b: store.getState().b,
        result: store.getState().result
      });
    });
  }

  componentWillUpdate = (nextProps, nextState) => {
    this.currentDigit(nextState);
  };

  currentDigit = nextState => {
    if (nextState.digit === 0) {
      const a = this.getRandomInt(0, 10);
      const b = this.getRandomInt(0, 10);
      const result = a + b;

      // store.dispatch({
      //   type: "getAgetBgetResult",
      //   a: a,
      //   b: b,
      //   result: result
      // });

      console.log('a: '+a)
      console.log('b: '+b)
      console.log('result: '+result)

      
    }
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <View>
        <View>
          <InputVoice />
        </View>

        <View style={styles.container}>
          <View style={styles.numberBox}>
            <Text style={styles.text}>{this.state.a}</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>+</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={styles.text}>{this.state.b}</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.text}>=</Text>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.text}>✓</Text>
            <Text style={styles.text}>+</Text>
          </View>
        </View>
      </View>
    );
  }
}

const dimension = {
  width: Dimensions.get("window").width / 4,
  height: Dimensions.get("window").height / 2
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  numberBox: {
    width: dimension.width,
    height: dimension.width,
    borderColor: "#B8B8B8",
    borderWidth: 2,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10
  },
  box: {
    width: dimension.width,
    height: 50,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10
  },
  text: {
    fontSize: 40,
    fontWeight: "bold"
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "#B8B8B8",
    borderWidth: 2
  }
});

export default SumOperation;
