import React from "react";
import { observer } from "mobx-react";

// Components
import UpdateButton from "../buttons/UpdateButton";

// Styles
import { CardItem, ListItem, Text, Left, Right, Icon } from "native-base";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteGoal,
  ButtonWrapper,
} from "./styles";

//Store
import goalStore from "../../stores/goalStore";

const GoalItem = ({ navigation, goal }) => {
  return (
    <>
      <ListItem>
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
            </CardItem>
            <CardItem>
              <Right>
                <Text>{goal.quantifiableUnits}</Text>
              </Right>
            </CardItem>
            <ButtonWrapper>
              <UpdateButton goal={goal} />
              <DeleteGoal
                type="EvilIcons"
                name="trash"
                onPress={() => goalStore.deleteGoal(goal.id)}
              />
            </ButtonWrapper>
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(GoalItem);
