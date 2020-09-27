import React, { useState } from "react";
import { observer } from "mobx-react";
import { Alert, Modal } from "react-native";

import progressStore from "../../stores/progressStore";

//Styling
import { View } from "native-base";
import {
  CloseButtonStyled,
  CreateButton,
  CreateButtonText,
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalView,
} from "./styles";

const ProgressModal = ({ isOpen, closeModal, oldProgress, goal }) => {
  const [progress, setProgress] = useState(
    oldProgress
      ? {
          targetProgress: oldProgress.targetProgress,
          goalId: oldProgress.goalId,
        }
      : {
          targetProgress: 0,
          goalId: goal.id,
        }
  );

  const handleSubmit = () => {
    if (progress.targetProgress <= goal.target) {
      progressStore.updateProgress(progress);
      closeModal();
    } else {
      Alert.alert("Oops", "Sorry, Your progress Can't acceed Your Target", [
        {
          text: "Go back",
        },
      ]);
    }
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}
      animationType="slide"
    >
      <ModalContainer>
        <ModalView style={{ marginTop: 200, marginBottom: 200 }}>
          <View>
            <CloseButtonStyled
              onPress={closeModal}
              type="AntDesign"
              name="close"
            />
            <ModalTitle>Update Your Progress</ModalTitle>
            <ModalTextInput
              style={{ marginTop: 50 }}
              onChangeText={(targetProgress) =>
                setProgress({ ...progress, targetProgress })
              }
              placeholder="Progress"
              placeholderTextColor="#9d8189"
              value={progress.targetProgress}
            />

            <CreateButton onPress={handleSubmit}>
              <CreateButtonText>Update</CreateButtonText>
            </CreateButton>
          </View>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(ProgressModal);
