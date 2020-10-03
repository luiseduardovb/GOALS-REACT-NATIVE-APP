import React from "react";
import { observer } from "mobx-react";

import { View, Right, Left } from "native-base";

// Styles
import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";
import ProgressBar from "../ProgressBar";

//Store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const LeaderboardItem = ({ navigation, LeaderboardGoal, profiles }) => {
  // console.log("LeaderboardItem -> profile", profile);
  // console.log("LeaderboardItem -> LeaderboardGoal", LeaderboardGoal);
  // console.log("LeaderboardItem -> goal.profile", profile.id);

  const profileId = profiles.id;
  console.log("LeaderboardItem -> profileId", profileId);
  const goalId = LeaderboardGoal.id;
  const followers = profileStore.profiles
    .filter((profile) => profile.id === profileId)
    .filter((goal) => goal.id === goalId);

  // const filteredFollowers = followers.filter((follower) => follower !== []);
  // console.log("LeaderboardItem -> followers", filteredFollowers);

  return (
    <ListWrapperView>
      <Left>
        <StyledRow style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          {authStore.user.username}
        </StyledRow>
      </Left>

      <Right style={{ paddingTop: 5 }}>
        <StyledRow style={{ marginRight: 100, paddingVertical: 5 }}>
          {`${profiles.Progress.targetProgress} / ${LeaderboardGoal.target}`}
        </StyledRow>
      </Right>
    </ListWrapperView>
  );
};

export default observer(LeaderboardItem);
