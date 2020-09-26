import React, { useState } from "react";

// Stores
import authStore from "../../stores/authStore";
import goalStore from "../../stores/goalStore";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { Icon, Text } from "native-base";
import { AddButtonStyled, AddTextStyled,StyledTouchableOpacity } from "./styles";


const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledTouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: "#2E73B4",
          bottom: 95,
          right: 30,
          width: 50,
          height: 50,
          borderRadius: 50,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setIsOpen(true)}
      >
        <AddButtonStyled
          size={30}
          type="MaterialCommunityIcons"
          name="target"
        />
        <GoalModal isOpen={isOpen} closeModal={closeModal} />
      </StyledTouchableOpacity>
    </>
  );
};

export default AddButton;
