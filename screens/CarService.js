import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import CheckBox from "@react-native-community/checkbox";

const CarServiceRequest = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      flatTire: false,
      checkEngineLight: false,
      headlightsNotFunctional: false,
      oilChange: false,
      brakesIssue: false,
      batteryProblem: false,
      otherIssues: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Car Service Request</Text>
      <View style={styles.formGroup}>
        {[
          { name: "flatTire", label: "Flat Tire" },
          { name: "checkEngineLight", label: "Check Engine Light On" },
          {
            name: "headlightsNotFunctional",
            label: "Headlights Not Functional",
          },
          { name: "oilChange", label: "Oil Change" },
          { name: "brakesIssue", label: "Brakes Issue" },
          { name: "batteryProblem", label: "Battery Problem" },
          { name: "airConditioning", label: "Air Conditioning Not Working" },
          { name: "engineOverheating", label: "Engine Overheating" },
        ].map((item, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <Controller
              control={control}
              name={item.name}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  value={value}
                  onValueChange={(newValue) => onChange(newValue)}
                  style={styles.checkbox}
                />
              )}
            />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.question}>
        Any other issues not previously listed?
      </Text>
      <Controller
        control={control}
        name="otherIssues"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F1DD",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
});

export default CarServiceRequest;
