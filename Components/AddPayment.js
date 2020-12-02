import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button, Input } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  
  };

  return (
    <ScrollView>
      <View style={styles.getStarted}>
        <View style={styles.backProfile}>
          <View style={styles.back}>
            <View>
              <AntDesign
                style={styles.back}
                name="left"
                size={20}
                color="#999B9D"
              />
            </View>
            <View style={styles.Addpayment}>
              <Text style={styles.textPayment}>Add Payment</Text>
              <Text style={styles.reminder}>Reminder</Text>
            </View>
          </View>
          <View>
            <View
              style={styles.ProfilePic}
              onClick={() => this.props.history.push("notification")}
            >
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    marginTop: -10,
                  }}
                  source={require("../assets/profile.png")}
                />
              </View>

              <View style={styles.Number}>
                <Text style={{ color: "white", fontSize: 13 }}>1</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.background}>
          <View style={styles.background2}>
            <View style={styles.walletVisa}>
              <Image source={require("../assets/wallet.png")} />

              <View style={{ left: 15 }}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Visa Silver Credit Card
                </Text>
                <Text style={{ top: 5, color: "#999B9D" }}>Payment</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                width: 31,
                height: 31,
                bottom: 8,
              }}
            >
              <Image source={require("../assets/update_credit_card.png")} />
            </View>
          </View>
        </View>

        <View style={styles.backgperiodicity}>
          <View style={styles.selectDate}>
            <Text style={styles.periodicity}>PERIODICITY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text style={{ fontSize: 15, color: "white" }}>Monthly</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>
              HOW WOULD YOU LIKE TO GATE REMINDER?
            </Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Notifications
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>
          <View style={styles.timer}>
          {/* <View style={{ height: 90 }}> */}
            <View>
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                // display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={styles.backcategory}>
          <View style={styles.selectDate}>
            <Text style={styles.periodicity}>CATEGORY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text style={{ fontSize: 15, color: "white" }}>Monthly</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>COMPANY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Notifications
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>AMOUNT TO PAY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    // borderRightColor: "gray",
                    // borderRightWidth: 1,
                    borderRightWidth: 3,
                  }}
                >
                  $
                </Text>
              </View>

              <View
                style={{
                  left: 10,
                  borderLeftWidth: 0.45,
                  borderColor: "#696969",
                  left: 30,
                  top: -7,
                  height: 30,
                  position: "absolute",
                }}
              ></View>
              <View style={{ left: 35 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    // borderRightColor: "gray",
                    // borderRightWidth: 1,
                  }}
                >
                  1,000
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.SelectPetButton}>
            <Text
              style={{ fontSize: 18, textAlign: "center", color: "#282C31" }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={styles.homeback}>
            <Image source={require("../assets/home.png")} />
          </View>

          <View style={styles.homeback}>
            <Image source={require("../assets/chart.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/calendar.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/tag.png")} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SelectPetButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    // width: 220,
  },

  getStarted: {
    flex: 1,
    padding: 10,
    top: 30,
  },

  Number: {
    backgroundColor: "green",
    position: "absolute",
    borderRadius: 50,
    left: 40,
    width: 16,
    height: 16,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: -10,
  },
  back: {
    display: "flex",
    flexDirection: "row",
  },
  backProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Addpayment: {
    left: 5,
    top: 1,
  },
  textPayment: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  reminder: {
    color: "#999B9D",
  },

  background: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    top: 15,
  },
  background2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backgperiodicity: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 30,
  },
  backgperiodicity2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backcategory: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 5,
  },

  walletVisa: {
    display: "flex",
    flexDirection: "row",
  },

  selectDateText: {
    color: "#999B9D",
  },
  periodicity: {
    color: "#999B9D",
    left: 5,
  },

  reminder: {
    color: "#999B9D",
    left: 5,
    marginTop: 10,
  },

  homeback: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    padding: 15,
    marginTop: 10,
  },
  timer: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 10,

  },
});
