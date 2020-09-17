import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";

//Stores
import goalStore from "../../stores/goalStore";

//Styling
import {
  CloseButtonStyled,
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
} from "./styles";

const GoalModal = ({ isOpen, closeModal, navigation }) => {
  const [goal, setGoal] = useState({
    name: "",
    quantifiableUnits: "",
    unitOfMeasure: "",
    target: 0,
    category: "",
    popularity: 0,
  });

  const handleSubmit = () => {
    goalStore.createGoal(goal);
    navigation.goBack();
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}
      animationType="slide"
    >
      <ModalContainer>
        <ModalView>
          <CloseButtonStyled
            onPress={closeModal}
            type="AntDesign"
            name="closecircleo"
          />
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
            onChangeText={(unitOfMeasure) =>
              setGoal({ ...goal, unitOfMeasure })
            }
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
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(GoalModal);
