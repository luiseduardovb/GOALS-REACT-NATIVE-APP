import React from "react";
import { observer } from "mobx-react";

// Components

// Styles
import { CardItem, ListItem, Text } from "native-base";
import { StyledCard, StyledContent, StyledImage } from "./styles";

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
              <Right>
                <Text>{goal.quantifiableUnits}</Text>
              </Right>
            </CardItem>
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(GoalItem);
