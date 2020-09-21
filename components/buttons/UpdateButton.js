import React, { useState } from "react";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { UpdateButtonStyled, UpdateButtonText } from "./styles";

const UpdateButton = ({ goal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onPress={() => setIsOpen(true)}>
        <UpdateButtonText>Update</UpdateButtonText>
      </UpdateButtonStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default UpdateButton;
