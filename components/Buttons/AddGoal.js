import { Icon, Text } from "native-base";
import React, { useState } from "react";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
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
