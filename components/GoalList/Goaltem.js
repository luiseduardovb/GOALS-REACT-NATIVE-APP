import React from "react";
import { observer } from "mobx-react";

// Component/ Buttons
import UpdateGoal from "../Buttons/UpdateGoal";
import UpdateProgress from "../Buttons/UpdateProgress";

// Stores
import goalStore from "../../stores/goalStore";

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
  return (
    <StyledContent>
      <StyledCard>
        <CardItem cardBody>
          {/* <StyledImage
            source={{
              uri: "https://wallpapercave.com/wp/wp1984340.jpg",
            }}
          /> */}
        </CardItem>
        <CardItem>
          <Left>
            <Text
              onPress={() => {
                navigation.navigate("Goal Detail", {
                  goal: goal,
                  category: category,
                });
              }}
            >
              {goal.name}
            </Text>
          </Left>
          <Right>
            <Text>{goal.quantifiableUnits}</Text>
            <UpdateGoal goal={goal} />
          </Right>

          {/* Follow Icon */}
          {/* <Icon
            type="AntDesign"
            name={goal.followed ? "PlusCircleOutlined" : "MinusCircleOutlined"}
            style={{ color: "blue" }}
            onPress={() => goalStore.followGoal(goal)}
          /> */}

          <Text
            onPress={() => goalStore.deleteGoal(goal.id)}
            style={{ fontSize: 25 }}
          >
            -
          </Text>
        </CardItem>
      </StyledCard>
    </StyledContent>
  );
};

export default observer(GoalItem);
