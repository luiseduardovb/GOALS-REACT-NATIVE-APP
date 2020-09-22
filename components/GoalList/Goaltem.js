import React from "react";
import { observer } from "mobx-react";
import { FlatGrid } from "react-native-super-grid";
import { SectionGrid } from "react-native-super-grid";
import { CardSection } from "react-native-super-grid";
// Styles
import {
  CardItem,
  ListItem,
  Text,
  Left,
  Right,
  View,
  Image,
  Container,
} from "native-base";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  StyledImageSearch,
} from "./Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const GoalItem = ({ navigation, goal, searchGoal }) => {
  return (
    <>
      {!searchGoal ? (
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
              </Right>
            </CardItem>
          </StyledCard>
        </StyledContent>
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(GoalItem);
