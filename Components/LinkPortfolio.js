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
        <Text style={styles.Stockchat}>NEXT, LINK YOUR PORTFOLIO</Text>
      </View>
      <View>
        <Text style={styles.aboutportfolio1}>
          Portfolio linking will help you connect with other investions that own
          the some stocks as you.
        </Text>

        <Text style={styles.aboutportfolio2}>
          If you choose to have a public account, then your portfolio will be
          available to others inside the chat. Dollor amounts will always be
          priate. Only percent changes will be public.
        </Text>
      </View>
 
      <View style={{ padding: 30, bottom: 30}}>
        <TouchableOpacity style={styles.SelectPetButton}>
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Link Brokerage
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.skipdoitlater}>
          skip, do it later
        </Text>
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

    bottom: 30,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    // padding: 30,
}
});
