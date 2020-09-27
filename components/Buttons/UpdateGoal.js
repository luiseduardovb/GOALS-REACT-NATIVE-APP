import React, { useState } from "react";
import { Icon, Text } from "native-base";

//Components
import GoalModal from "../modals/GoalModal";

//Styles
import { UpdateGoalButtonStyled, UpdateGoalTextStyled } from "./styles";

const UpdateGoal = ({ goal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateGoalButtonStyled
        onPress={() => setIsOpen(true)}
        type="MaterialCommunityIcons"
        name="square-edit-outline"
      />
      <UpdateGoalTextStyled>Edit</UpdateGoalTextStyled>
      <GoalModal isOpen={isOpen} closeModal={closeModal} oldGoal={goal} />
    </>
  );
};

export default UpdateGoal;
