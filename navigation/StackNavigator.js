import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SplashForm from "../screens/SplashScreen";
import LoginForm from "../screens/Login";
import RegisterForm from "../screens/Register";
import SignOut from "../components/SignOut";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  function HeaderRightButton() {
    const navigation = useNavigation(); // Correct use of useNavigation inside a component
    return (
      <Button
        title="Log In"
        onPress={() => {
          navigation.navigate("UserLogin");
        }}
      />
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
          headerLeft: () => <SignOut />,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
