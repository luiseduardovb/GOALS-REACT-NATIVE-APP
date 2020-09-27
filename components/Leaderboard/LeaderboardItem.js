import React from "react";
import { observer } from "mobx-react";

// Styles
import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";

//Store

const LeaderboardItem = ({ navigation, goal, user, myGoal }) => {
  return (
    <ListWrapperView>
      <StyledRow style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        {user.username}
      </StyledRow>
      <StyledRow style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        {goal.target}
      </StyledRow>
    </ListWrapperView>
  );
};

export default observer(LeaderboardItem);
