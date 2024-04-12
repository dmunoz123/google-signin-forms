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

const PersonalServiceRequest = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      lightsFlickering: false,
      acNotWorking: false,
      doorCreaking: false,
      waterLeak: false,
      heatingIssue: false,
      windowStuck: false,
      noiseIssue: false,
      lightsFlickeringDetail: "",
      acNotWorkingDetail: "",
      doorCreakingDetail: "",
      waterLeakDetail: "",
      heatingIssueDetail: "",
      windowStuckDetail: "",
      noiseIssueDetail: "",
      otherIssues: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const issues = [
    {
      name: "lightsFlickering",
      label: "Lights Flickering",
      detailName: "lightsFlickeringDetail",
    },
    {
      name: "acNotWorking",
      label: "AC Not Working",
      detailName: "acNotWorkingDetail",
    },
    {
      name: "doorCreaking",
      label: "Door Creaking Loudly",
      detailName: "doorCreakingDetail",
    },
    { name: "waterLeak", label: "Water Leak", detailName: "waterLeakDetail" },
    {
      name: "heatingIssue",
      label: "Heating Issue",
      detailName: "heatingIssueDetail",
    },
    {
      name: "windowStuck",
      label: "Window Stuck",
      detailName: "windowStuckDetail",
    },
    {
      name: "noiseIssue",
      label: "Noise Issue",
      detailName: "noiseIssueDetail",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal Service Request</Text>
      <View style={styles.formGroup}>
        {issues.map((item, index) => (
          <View key={index} style={styles.formControl}>
            <View style={styles.checkboxContainer}>
              <Controller
                control={control}
                name={item.name}
                render={({ field: { onChange, value } }) => (
                  <CheckBox
                    value={value}
                    onValueChange={(newValue) => {
                      onChange(newValue);
                      // Automatically hide the text input when the checkbox is unchecked
                      if (!newValue) setValue(item.detailName, "");
                    }}
                    style={styles.checkbox}
                  />
                )}
              />
              <Text style={styles.label}>{item.label}</Text>
            </View>
            {watch(item.name) && (
              <Controller
                control={control}
                name={item.detailName}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Feel free to explain more here"
                  />
                )}
              />
            )}
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
            style={styles.textInputLarge}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
            placeholder="Please describe any other issues..."
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
  formControl: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  textInputLarge: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default PersonalServiceRequest;
