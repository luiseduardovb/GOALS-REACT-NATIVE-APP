import { Icon, Text } from "native-base";
import React, { useState } from "react";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { AddButtonStyled } from "./styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddButtonStyled onPress={() => setIsOpen(true)}>
        <AddButtonStyled>Add Your Goal!</AddButtonStyled>
      </AddButtonStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
