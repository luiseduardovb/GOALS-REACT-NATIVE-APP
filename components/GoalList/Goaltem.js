import React from "react";
import { observer } from "mobx-react";

// Component/ Buttons
import UpdateGoal from "../Buttons/UpdateGoal";
import UpdateProgress from "../Buttons/UpdateProgress";
import FollowGoal from "../Buttons/FollowGoal";

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

const GoalItem = ({ navigation, goal, myGoal, category }) => {
  // console.log("GoalItem -> goal", goal.id);

  const goalId = goal.id;

  return (
    <StyledContent>
      <StyledCard>
        <CardItem>
          <Left>
            <Text
              onPress={(goalId) => {
                navigation.navigate("Goal Detail", {
                  goal: goal,
                  category: category,
                });
                progressStore.fetchGoalProgresses(goalId);
              }}
            >
              {goal.name}
            </Text>
          </Left>

          <Right>
            <Text>{goal.quantifiableUnits}</Text>
            <UpdateGoal goal={goal} />
          </Right>

          {/* <Icon
            type="AntDesign"
            name={goal.followed ? "PlusCircleOutlined" : "MinusCircleOutlined"}
            style={{ color: "blue" }}
            onPress={() => goalStore.followGoal(goal)}
          /> */}
          {goal.followed ? (
            <FollowGoal goal={goal} />
          ) : (
            <Text
              onPress={() => goalStore.deleteGoal(goal.id)}
              style={{ fontSize: 25 }}
            >
              -
            </Text>
          )}
        </CardItem>
      </StyledCard>
    </StyledContent>
  );
};

export default observer(GoalItem);
