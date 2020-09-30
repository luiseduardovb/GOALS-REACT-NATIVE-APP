import React from "react";
import { observer } from "mobx-react";

import { View, Right, Left } from "native-base";

// Styles
import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";
import ProgressBar from "../ProgressBar";

//Store

const LeaderboardItem = ({ navigation, goal, user, goalComplete }) => {
  // console.log("LeaderboardItem -> goal", goal);

  return (
    <ListWrapperView>
      <Left>
        <StyledRow style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          {user.username}
        </StyledRow>
      </Left>
      <Right style={{ paddingTop: 5 }}>
        <StyledRow style={{ marginRight: 100, paddingVertical: 5 }}>
          {`${goal.Progress.targetProgress} / ${goalComplete.target}`}
        </StyledRow>
      </Right>
    </ListWrapperView>
  );
};

export default observer(LeaderboardItem);
