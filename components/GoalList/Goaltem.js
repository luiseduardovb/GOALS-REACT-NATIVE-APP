import React from "react";
import { observer } from "mobx-react";

// Component/ Buttons
import UpdateGoal from "../Buttons/UpdateGoal";
import UpdateProgress from "../Buttons/UpdateProgress";

// Styles
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardItem, Text, Left, Right, Icon } from "native-base";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteGoal,
  ButtonWrapper,
  StyledImageSearch,
} from "./Styles";

const GoalItem = ({ navigation, goal, myGoal }) => {
  return (
    <StyledContent>
      <StyledCard>
        <CardItem cardBody>
          <StyledImage
            source={{
              uri: "https://wallpapercave.com/wp/wp1984340.jpg",
            }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text
              onPress={() => {
                navigation.navigate("Goal Detail", { goal: goal });
              }}
            >
              {goal.name}
            </Text>
          </Left>
          <Right>
            <Text>{goal.quantifiableUnits}</Text>
            <UpdateGoal goal={goal} />
          </Right>
        </CardItem>
      </StyledCard>
    </StyledContent>
  );
};

export default observer(GoalItem);
