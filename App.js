import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GetStarted from "./Components/GetStarted";
import PhoneNumber from "./Components/PhoneNumber";
import ChoosingUsername from "./Components/ChoosingUsername";
import LinkPortfolio from "./Components/LinkPortfolio"
import Routes from "./Routes";
import VerifyPhoneNumber from "./Components/VerifyPhoneNumber"
import InviteFriends from "./Components/InviteFriends"
import Notification from "./Components/Notification"
import Success from "./Components/Success"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Success/> */}
      {/* <Notification/> */}
      {/* <InviteFriends/> */}
      {/* <VerifyPhoneNumber/> */}
      {/* <LinkPortfolio/> */}
      {/* <PhoneNumber/> */}
      <GetStarted/>
      {/* <ChoosingUsername /> */}
      {/* <Routes /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2429",
  },
});
