import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.getStarted}>
      <View>
        <View style={{ display: "flex", alignSelf: "center", top: -15 }}>
          <Entypo name="message" size={100} color="white" />
        </View>
        <View>
          <Text style={styles.Stockchat}> stockchat</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.SelectPetButton}>
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Get Started
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.HaveAccount}>
            Already have an account? Sign In
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SelectPetButton: {
    backgroundColor: "#0957BD",
    padding: 15,
    borderRadius: 5,
    width: 220,
  },
  getStarted: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },

  HaveAccount: {
    color: "white",
    textAlign: "center",
    top: 35,
    fontSize: 15,
  },
  Stockchat: {
    color: "white",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
});
