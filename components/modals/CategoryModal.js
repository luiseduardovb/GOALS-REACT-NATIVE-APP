import React, { useState } from "react";
import { observer } from "mobx-react";
import { Alert, Modal } from "react-native";

import categoryStore from "../../stores/categoryStore";

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

const Category = ({ isOpen, closeModal }) => {
  const [category, setCategory] = useState({ name: "" });

  const handleSubmit = () => {
    categoryStore.createCategory(category);
    closeModal();
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}
      animationType="fade"
    >
      <ModalContainer style={{ marginBottom: 78 }}>
        <ModalView style={{ marginTop: 100 }}>
          <View>
            <CloseButtonStyled
              onPress={closeModal}
              type="AntDesign"
              name="closesquareo"
            />
            <ModalTitle>Create Category</ModalTitle>
            <ModalTextInput
              style={{ marginTop: 50 }}
              onChangeText={(name) => setCategory({ ...category, name })}
              placeholder="Category Name"
              placeholderTextColor="#9d8189"
              value={category.name}
            />

            <CreateButton style={{ marginTop: 150 }} onPress={handleSubmit}>
              <CreateButtonText>Create</CreateButtonText>
            </CreateButton>
          </View>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

export default observer(Category);
