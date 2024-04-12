import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

export default function () {
  const navigation = useNavigation();

  const YOUR_CLIENT_ID =
    "925865605250-25nrvo4fq7m46a2hdi9t64die92ggk2u.apps.googleusercontent.com";

  const YOUR_REDIRECT_URI = "http://127.0.0.1:54321";

  const handlePress = async () => {
    const result = await WebBrowser.openAuthSessionAsync(
      `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`,
      "http://127.0.0.1:54321"
    );

    if (result.type === "success") {
      // get back the params from the url
      const params = Linking.parse(result.url);

      const { email, name, picture } = params.queryParams;

      //pass in all the user data in an object...
      const user = {
        email,
        name,
        picture,
      };

      // navigate to the HomeScreen and pass the user object
      // navigation.navigate("HomeScreen", { user });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.circle}>
          <Text style={styles.text}>G</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#DEB887",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
