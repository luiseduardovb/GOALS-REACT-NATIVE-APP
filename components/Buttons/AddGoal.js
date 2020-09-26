import React, { useState } from "react";

// Stores
import authStore from "../../stores/authStore";
import goalStore from "../../stores/goalStore";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { Icon, Text } from "native-base";
import { AddButtonStyled, AddTextStyled } from "./styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddTextStyled>Add Your Goal!</AddTextStyled>
      <AddButtonStyled
        onPress={() => setIsOpen(true)}
        type="Ionicons"
        name="ios-add-circle"
      />
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
