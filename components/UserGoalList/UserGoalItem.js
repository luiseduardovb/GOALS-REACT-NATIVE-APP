import React from "react";
import { observer } from "mobx-react";

//Components
import ProgressBar from "../ProgressBar";

// Styles

import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";

//Store
import progressStore from "../../stores/progressStore";

const UserGoalItem = ({ navigation, goal, myGoal }) => {
  //   const foundProgress = progressStore.progresses
  //     .filter((progress) => progress.goalId === goal.id)
  //     .filter((progress) => progress.profileId === user.id);

  return (
    <ListWrapperView>
      <StyledRow style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
        {goal.name}
      </StyledRow>
      <StyledRow style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
        {goal.unitOfMeasure}
      </StyledRow>
      <StyledProgressView style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
        <ProgressBar />
      </StyledProgressView>
    </ListWrapperView>
  );
};

export default observer(UserGoalItem);
