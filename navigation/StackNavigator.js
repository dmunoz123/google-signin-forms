import * as React from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SplashForm from "../screens/SplashScreen";
import LoginForm from "../screens/Login";
import RegisterForm from "../screens/Register";
import SignOut from "../components/SignOut";
import MealSignIn from "../screens/MealSignIn";
import PDFScreen from "../screens/FuneralDirective";
import CarServiceRequest from "../screens/CarService";
import PersonalServiceRequest from "../screens/PersonalService";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  function HeaderRightButton() {
    const navigation = useNavigation(); // Correct use of useNavigation inside a component
    return (
      <View style={styles.headerRightContainer}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate("UserLogin")}
        />
        <SignOut />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ECF0F1",
          },
          headerTintColor: "#276EAA",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <HeaderRightButton />,
        }}
      >
        <Stack.Screen name="Home" component={SplashForm} />

        <Stack.Screen
          name="UserLogin"
          component={LoginForm}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="UserRegister"
          component={RegisterForm}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="CarService"
          component={CarServiceRequest}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="PersonalService"
          component={PersonalServiceRequest}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="MealSignIn"
          component={MealSignIn}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 10, // Right margin for overall padding
  },
});
