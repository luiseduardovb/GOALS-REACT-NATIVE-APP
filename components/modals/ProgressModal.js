import React, { useState } from "react";
import { observer } from "mobx-react";
import { Modal } from "react-native";
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

const ProgressModal = ({ isOpen, closeModal, oldProgress }) => {
  const [progress, setProgress] = useState({
    targetProgress: oldProgress.targetProgress,
  });

  const handleSubmit = () => {
    progressStore.updateProgress(progress);
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
            <ModalTitle>Update Your Progress</ModalTitle>
            <ModalTextInput
              onChangeText={(targetProgress) =>
                setProgress({ ...progress, targetProgress })
              }
              placeholder="Target"
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
