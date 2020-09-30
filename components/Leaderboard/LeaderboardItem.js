import React from "react";
import { observer } from "mobx-react";

import { View, Right, Left } from "native-base";

// Styles
import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";
import ProgressBar from "../ProgressBar";

//Store

const LeaderboardItem = ({ navigation, goal, user, myGoal, progress }) => {
  console.log("LeaderboardItem -> progress", progress);

  return (
    <ListWrapperView>
      <Left>
        <StyledRow style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          {user.username}
        </StyledRow>
      </Left>
      <Right>
        <ProgressBar navigation={navigation} goal={goal} />
      </Right>
    </ListWrapperView>
  );
};

export default observer(LeaderboardItem);
