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
        <Text style={styles.Stockchat}> START BY CHOOSING A USERNAME</Text>
      </View>
      <View>
        <Text style={styles.username}>
          Usernames will be displayed in the chat, so make sure you choose
          something you like.
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          style={styles.Input}
          placeholder="Username"
        />
      </View>
     <View style={{padding: 30, top: 35 }}>
       <TouchableOpacity
       
       style={styles.SelectPetButton}
     >
       <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
         Continue
       </Text>
     </TouchableOpacity>
     </View>
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
  username: {
    // marginTop: 10,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 20,
  },
  Input: {
    borderBottomWidth: 0,
    backgroundColor: "#3C4956",
    // backgroundColor:"red",
    // borderBottomColor: "#3C4956",
    borderColor: "#3C4956",
    padding: 12,
    paddingLeft: 30,
    color: "white",
    height: 50,
    fontSize: 21,
  },
});
