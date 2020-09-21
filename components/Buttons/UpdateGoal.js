import React, { useState } from "react";
import { Icon, Text } from "native-base";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ goal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onPress={() => setIsOpen(true)}>
        Edit
      </UpdateButtonStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} oldGoal={goal} />
    </>
  );
};

export default UpdateButton;
