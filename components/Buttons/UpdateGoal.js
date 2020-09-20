import React, { useState } from "react";
import { Icon, Text } from "native-base";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onPress={() => setIsOpen(true)}>
        Update Profile
      </UpdateButtonStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default UpdateButton;
