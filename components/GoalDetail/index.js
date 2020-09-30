import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Body, Header, Left, Spinner, Text } from "native-base";
import { Circle } from "react-native-svg";

//Components
import UpdateProgress from "../Buttons/UpdateProgress";
import ProgressCircle from "../ProgressCircle";
import PopularityGraph from "../PopularityGraph";
import Leaderboard from "../Leaderboard";
import Comment from "../CommentList/CommantForm";
//Stores

//Styles
import {
  LeaderBoard,
  PersonalProgress,
  Popularity,
  StyledCard,
  StyledTitle,
  TextLeaderboardStyled,
  TextProgressStyled,
  TextDetailStyled,
} from "./styles";
import commentStore from "../../stores/commentStore";
import CommentList from "../CommentList";
import CommantForm from "../CommentList/CommantForm";

const GoalDetail = ({ route }) => {
  const { goal } = route.params;
  const comments = commentStore.comments.filter(
    (comment) => comment.goalId === goal.id
  );
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <StyledCard>
            <StyledTitle>Leaderboard</StyledTitle>
            <Leaderboard goal={goal} />
          </StyledCard>
          {/* <StyledCard>
          <StyledTitle>Progress</StyledTitle>
          <ProgressCircle goal={goal} />
        </StyledCard> */}
          <StyledCard>
            <StyledTitle>Popularity</StyledTitle>
            <PopularityGraph goal={goal} />
          </StyledCard>
          <TextDetailStyled>Description: {goal.description}</TextDetailStyled>
          <TextDetailStyled>
            Target: {goal.target} {goal.unitOfMeasure}
          </TextDetailStyled>

          <TextDetailStyled>Category: {goal.name}</TextDetailStyled>
          <LeaderBoard>
            <TextLeaderboardStyled>Leaderboard</TextLeaderboardStyled>
          </LeaderBoard>
          <PersonalProgress>
            <TextProgressStyled>Progress</TextProgressStyled>
            <ProgressCircle goal={goal} />
          </PersonalProgress>
          <UpdateProgress goal={goal} />
          <CommentList comments={comments} />
          <CommantForm goal={goal} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(GoalDetail);
