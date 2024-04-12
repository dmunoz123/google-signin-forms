import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <ScrollView style={styles.screenContainer}>
      <ImageBackground
        source={require("../assets/lmu2.png")}
        style={styles.banner}
        imageStyle={{ resizeMode: "cover", alignSelf: "flex-start" }}
      >
        <Text style={styles.greetingText}>
          Good afternoon Jesuit community at LMU, today is Friday, March 22nd.
          Here are the forms for the day!
        </Text>
      </ImageBackground>

      <View style={styles.formsContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("MeetingMinutes")}
        >
          <Text style={styles.buttonText}>Consultor Meeting Minutes Form</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("SundayScheduleForm")}
        >
          <Text style={styles.buttonText}>Sunday Presiders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("JesuitScheduleForm")}
        >
          <Text style={styles.buttonText}>Jesuit Presiders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("UserList")}
        >
          <Text style={styles.buttonText}>Community Members</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("RoleList")}
        >
          <Text style={styles.buttonText}>Community Role</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#F5F1DD",
  },
  banner: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 120,
  },
  greetingText: {
    color: "#fff",
    fontSize: 23,
    alignSelf: "center",
    paddingHorizontal: 20,
    fontStyle: "italic",
  },
  formsContainer: {
    width: "100%",
    alignItems: "flex-start", // Align buttons to the left
    padding: 20,
  },
  buttonStyle: {
    width: "100%", // Take up the full width of the container
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#800000", // Faded maroon color
  },
  buttonText: {
    fontSize: 18,
    color: "#000", // Adjust as necessary
  },
});
