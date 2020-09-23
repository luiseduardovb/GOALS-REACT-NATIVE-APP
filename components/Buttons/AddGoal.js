import { Icon } from "native-base";
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
        <Icon style={{ color: "#c9ada7" }} type="Entypo" name="plus" />
      </AddButtonStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
