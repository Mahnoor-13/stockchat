import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.getStarted}>
      <View>
        <AntDesign style={styles.back} name="left" size={30} color="white" />
      </View>
      <View style={{ display: "flex", alignSelf: "center", top: -2 }}>
        <Entypo name="message" size={100} color="white" />
      </View>
      <View>
        <Text style={styles.Stockchat}> TURN ON NOTIFICATIONS</Text>
      </View>
      <View>
        <Text style={styles.aboutportfolio1}>
          Notifications will let you know when you get mentioned in the chat,
          they will alse keep you updated on tranding stocks.
        </Text>
      </View>

      <View style={{ padding: 30, marginTop: 70 }}>
        <TouchableOpacity style={styles.SelectPetButton}>
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Turn On Notifications
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.skipdoitlater}>skip, do it later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  getStarted: {
    flex: 1,
    padding: 20,
    top: 40,
  },
  SelectPetButton: {
    backgroundColor: "#0957BD",
    padding: 15,
    borderRadius: 5,
    // width: 220,
  },
  HaveAccount: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  Stockchat: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    // fontWeight: "bold",
  },
  aboutportfolio1: {
    // marginTop: -20,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 30,
  },

  aboutportfolio2: {
    bottom: 30,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 30,
  },
  skipdoitlater: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    // padding: 30,
  },
});
