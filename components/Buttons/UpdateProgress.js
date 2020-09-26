import React, { useState } from "react";
import ProgressModal from "../modals/ProgressModal";
import progressStore from "../../stores/progressStore";

//Styles
import { UpdateButtonStyled } from "./styles";

const UpdateProgress = ({ goal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const oldProgress = progressStore.progresses.find(
    (progress) => progress.goalId === goal.id
  );

  return (
    <>
      <UpdateButtonStyled
        onPress={() => setIsOpen(true)}
        type="MaterialCommunityIcons"
        name="square-edit-outline"
      />
      <ProgressModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProgress={oldProgress}
        goal={goal}
      />
    </>
  );
};

export default UpdateProgress;
