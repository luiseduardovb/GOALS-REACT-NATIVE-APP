import React, { useState } from "react";
import ProgressModal from "../modals/ProgressModal";
import progressStore from "../../stores/progressStore";

//Styles
import { Icon, Text } from "native-base";
import { UpdateProgressButtonStyled, UpdateProgressTextStyled } from "./styles";

const UpdateProgress = ({ goal }) => {
  // console.log("UpdateProgress -> goal", goal);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const oldProgress = progressStore.progresses.find(
    (progress) => progress.goalId === goal.id
  );

  return (
    <>
      <UpdateProgressButtonStyled
        onPress={() => setIsOpen(true)}
        type="MaterialCommunityIcons"
        name="square-edit-outline"
      />
      <UpdateProgressTextStyled>Update Progress</UpdateProgressTextStyled>
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
