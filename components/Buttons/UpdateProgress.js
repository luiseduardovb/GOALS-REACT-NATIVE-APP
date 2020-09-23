import React, { useState } from "react";
import { Icon, Text } from "native-base";

//Components

//Styles
import { UpdateButtonStyled } from "./styles";
import ProgressModal from "../modals/ProgressModal";

const UpdateButton = ({ progress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onPress={() => setIsOpen(true)}>
        Edit
      </UpdateButtonStyled>
      <ProgressModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProgress={progress}
      />
    </>
  );
};

export default UpdateButton;
