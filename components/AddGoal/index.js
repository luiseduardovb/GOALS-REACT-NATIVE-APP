import React, { useState } from "react";
import { Text, View, Alert } from "react-native";

//Styles
import {
  AddGoalStyled,
  AddText,
  CloseButtonStyled,
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
} from "./styles";

//Components
// import GoalModal from "../modals/GoalModal";
import goalStore from "../../stores/goalStore";
import { Container } from "native-base";

const AddGoal = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [goal, setGoal] = useState({
    name: "",
    quantifiableUnits: "",
    unitOfMeasure: "",
    target: 0,
    category: "",
    popularity: 0,
  });

  const closeModal = () => setIsOpen(false);
  const handleSubmit = () => {
    goalStore.createGoal(goal);
    // navigation.navigate();
    Alert.alert("Focus on your goal !", "", [
      {
        text: "Explore",
        onPress: () => navigation.navigate("Explore"),
      },
      {
        text: "Go Back",
        onPress: () => navigation.navigate("Profile"),
      },
    ]);
  };
  return (
    <Container style={{ margin: 10, marginTop: 100 }}>
      <ModalTitle>Write down your Goal</ModalTitle>
      <ModalTextInput
        onChangeText={(name) => setGoal({ ...goal, name })}
        placeholder="name"
        placeholderTextColor="red"
      />
      <ModalTextInput
        onChangeText={(quantifiableUnits) =>
          setGoal({ ...goal, quantifiableUnits })
        }
        placeholder="Quantifiable Units"
        placeholderTextColor="red"
      />
      <ModalTextInput
        onChangeText={(unitOfMeasure) => setGoal({ ...goal, unitOfMeasure })}
        placeholder="Unit of Measure"
        placeholderTextColor="red"
      />
      <ModalTextInput
        onChangeText={(target) => setGoal({ ...goal, target })}
        placeholder="Target"
        placeholderTextColor="red"
      />
      <ModalTextInput
        onChangeText={(category) => setGoal({ ...goal, category })}
        placeholder="Category"
        placeholderTextColor="red"
      />

      <CreateButton onPress={handleSubmit}>
        <CreateButtonText>Create Goal</CreateButtonText>
      </CreateButton>
    </Container>
  );
};

export default AddGoal;
