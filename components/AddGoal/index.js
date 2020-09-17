import React, { useState } from "react";
import { Text, View } from "react-native";

//Styles
import { AddGoalStyled, AddText } from "./styles";

//Components
import GoalModal from "../modals/GoalModal";

const AddGoal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddGoalStyled onPress={() => setIsOpen(true)}>
        <AddText>Add Goal</AddText>
      </AddGoalStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddGoal;
