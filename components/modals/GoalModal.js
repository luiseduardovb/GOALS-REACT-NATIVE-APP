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
import Profile from "../Profile";

const GoalModal = ({ isOpen, closeModal, oldGoal, navigation, profile }) => {
  const [goal, setGoal] = useState(
    oldGoal ?? {
      name: "",
      description: "",
      unitOfMeasure: "",
      target: 0,
      category: "",
    }
  );

  const handleSubmit = () => {
    if (oldGoal) {
      goalStore.updateGoal(goal);
    } else {
      {
        setGoal({
          name: null,
          description: null,
          unitOfMeasure: null,
          target: null,
          category: null,
        })
          ? Alert.alert("Oops", "You must forget to fill one of the field", [
              {
                text: "Go back",
              },
            ])
          : goalStore.createGoal(goal, profile);
        setGoal({
          name: "",
          description: "",
          unitOfMeasure: "",
          target: 0,
          category: "",
        });
      }
    }
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
              placeholder="name *"
              placeholderTextColor="#9d8189"
              value={goal.name}
            />
            <ModalTextInput
              onChangeText={(description) => setGoal({ ...goal, description })}
              placeholder="Description *"
              placeholderTextColor="#9d8189"
              value={goal.description}
            />
            <ModalTextInput
              onChangeText={(unitOfMeasure) =>
                setGoal({ ...goal, unitOfMeasure })
              }
              placeholder="Unit of Measure *"
              placeholderTextColor="#9d8189"
              value={goal.unitOfMeasure}
            />
            <ModalTextInput
              onChangeText={(target) => setGoal({ ...goal, target })}
              placeholder="Target *"
              placeholderTextColor="#9d8189"
              value={goal.target}
            />
            <ModalTextInput
              onChangeText={(category) => setGoal({ ...goal, category })}
              placeholder="Category *"
              placeholderTextColor="#9d8189"
              value={goal.category}
            />
            <CreateButton style={{ borderRadius: 20 }} onPress={handleSubmit}>
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
