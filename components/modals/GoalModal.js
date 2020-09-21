import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";
import { View } from "native-base";

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

const GoalModal = ({ isOpen, closeModal, oldGoal, navigation }) => {
  const [goal, setGoal] = useState(
    oldGoal ?? {
      name: "",
      quantifiableUnits: "",
      unitOfMeasure: "",
      target: 0,
      category: "",
      popularity: 0,
    }
  );

  const handleSubmit = () => {
    goalStore[oldGoal ? "updateGoal" : "createGoal"](goal);
    closeModal();
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
          <View>
            <CloseButtonStyled
              onPress={closeModal}
              type="AntDesign"
              name="closecircleo"
            />
            <ModalTitle>Write down your Goal</ModalTitle>
            <ModalTextInput
              onChangeText={(name) => setGoal({ ...goal, name })}
              placeholder="name"
              placeholderTextColor="#9d8189"
              value={goal.name}
            />
            <ModalTextInput
              onChangeText={(quantifiableUnits) =>
                setGoal({ ...goal, quantifiableUnits })
              }
              placeholder="Quantifiable Units"
              placeholderTextColor="#9d8189"
              value={goal.quantifiableUnits}
            />
            <ModalTextInput
              onChangeText={(unitOfMeasure) =>
                setGoal({ ...goal, unitOfMeasure })
              }
              placeholder="Unit of Measure"
              placeholderTextColor="#9d8189"
              value={goal.unitOfMeasure}
            />
            <ModalTextInput
              onChangeText={(target) => setGoal({ ...goal, target })}
              placeholder="Target"
              placeholderTextColor="#9d8189"
              value={goal.target}
            />
            <ModalTextInput
              onChangeText={(category) => setGoal({ ...goal, category })}
              placeholder="Category"
              placeholderTextColor="#9d8189"
              value={goal.category}
            />

            <CreateButton onPress={handleSubmit}>
              <CreateButtonText>
                {oldGoal ? "Update" : "Create"}
              </CreateButtonText>
            </CreateButton>
          </View>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(GoalModal);
