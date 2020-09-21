import React from "react";
import { observer } from "mobx-react";

// Styles
import { CardItem, Text, Left, Right } from "native-base";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteGoal,
  ButtonWrapper,
} from "./Styles";

//Store
import goalStore from "../../stores/goalStore";
import UpdateGoal from "../Buttons/UpdateGoal";

const GoalItem = ({ navigation, goal, myGoal }) => {
  return (
    <>
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
              <Text>{goal.name}</Text>
            </Left>
            <Right>
              <Text>{goal.quantifiableUnits}</Text>
            </Right>
          </CardItem>
          <ButtonWrapper>
            <UpdateGoal goal={goal} />
            <DeleteGoal
              type="EvilIcons"
              name="trash"
              onPress={() => goalStore.deleteGoal(goal.id)}
            />
          </ButtonWrapper>
        </StyledCard>
      </StyledContent>
    </>
  );
};

export default observer(GoalItem);
