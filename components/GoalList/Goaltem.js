import React from "react";
import { observer } from "mobx-react";

// Component/ Buttons
import UpdateGoal from "../Buttons/UpdateGoal";
import UpdateProgress from "../Buttons/UpdateProgress";
import FollowGoal from "../Buttons/FollowGoal";
import ProgressBar from "../ProgressBar";

// Stores
import goalStore from "../../stores/goalStore";
import progressStore from "../../stores/progressStore";

// Styles
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardItem, Text, Left, Right, Icon, Button } from "native-base";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteGoal,
  ButtonWrapper,
  StyledImageSearch,
} from "./Styles";

const GoalItem = ({
  navigation,
  goal,
  myGoals,
  category,
  profileFollowedGoals,
}) => {
  const goalFollowStatus = profileFollowedGoals.includes(
    (followedgoal) => followedgoal.id === goal.id
  );

  return (
    <StyledContent>
      <StyledCard>
        <CardItem>
          <Left>
            <Text
              onPress={() => {
                navigation.navigate("Goal Detail", {
                  goal: goal,
                  myGoals: myGoals,
                });
              }}
            >
              {goal.name}
            </Text>
          </Left>

          <Right>
            <Text>{goal.UnitOfMeasure}</Text>
            {myGoals && <UpdateGoal goal={goal} />}
          </Right>

          {/* <Icon
            type="AntDesign"
            name={goal.followed ? "PlusCircleOutlined" : "MinusCircleOutlined"}
            style={{ color: "blue" }}
            onPress={() => goalStore.followGoal(goal)}
          /> */}

          {goalFollowStatus ? (
            <FollowGoal goal={goal} />
          ) : (
            <Text
              onPress={() => progressStore.unfollowGoal(goal.id)}
              style={{ fontSize: 25 }}
            >
              Unfollow
            </Text>
          )}
        </CardItem>
      </StyledCard>
    </StyledContent>
  );
};

export default observer(GoalItem);
