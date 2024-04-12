import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Calendar } from "react-native-calendars";
import CheckBox from "@react-native-community/checkbox";

export default function MealSignIn() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      attendingMeals: null, // Defaulting to 'no' for demonstration
    },
  });
  const [selectedDates, setSelectedDates] = useState({});
  const attendingMeals = watch("attendingMeals");

  const onSubmit = (data) => {
    console.log(`Attending meals: ${data.attendingMeals}`);
    if (data.attendingMeals === "no") {
      console.log("Not attending on:", Object.keys(selectedDates));
    }
  };

  const handleDayPress = (day) => {
    const newDates = {
      ...selectedDates,
      [day.dateString]: { selected: true, marked: true },
    };
    setSelectedDates(newDates);
    console.log("Selected date:", day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Will you be attending meals this week?
      </Text>
      <View style={styles.checkboxContainer}>
        <Controller
          control={control}
          name="attendingMeals"
          render={({ field: { onChange, value } }) => (
            <>
              <CheckBox
                value={value === "yes"}
                onValueChange={(newValue) => onChange(newValue ? "yes" : "no")}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Yes</Text>
              <CheckBox
                value={value === "no"}
                onValueChange={(newValue) => onChange(newValue ? "no" : "yes")}
                style={styles.checkbox}
              />
              <Text style={styles.label}>No</Text>
            </>
          )}
        />
      </View>
      {attendingMeals === "no" && (
        <Calendar onDayPress={handleDayPress} markedDates={selectedDates} />
      )}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F1DD",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginHorizontal: 8,
  },
  label: {
    fontSize: 16,
  },
});
