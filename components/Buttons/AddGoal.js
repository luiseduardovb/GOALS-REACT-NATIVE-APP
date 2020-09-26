import React, { useState } from "react";

// Stores
import authStore from "../../stores/authStore";
import goalStore from "../../stores/goalStore";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { Icon, Text } from "native-base";
import { AddButtonStyled, StyledTouchableOpacity } from "./styles";

const AddGoal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledTouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOpen(true)}
      >
        <AddButtonStyled size={30} type="AntDesign" name="pluscircleo" />
        <GoalModal isOpen={isOpen} closeModal={closeModal} />
      </StyledTouchableOpacity>
    </>
  );
};

export default AddGoal;
