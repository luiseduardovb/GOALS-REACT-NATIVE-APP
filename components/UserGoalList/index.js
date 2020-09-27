import React from "react";
import { observer } from "mobx-react";
import { List, Text } from "native-base";

//Components
import UserGoalItem from "./UserGoalItem";

//Styles
import {
  BodyView,
  HeaderWrapperView,
  HeaderTitle,
  StyledProgressView,
} from "./styles";

//Stores
import goalStore from "../../stores/goalStore";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const UserGoalList = ({ navigation }) => {
  const userGoalList = goalStore.goals.map((goal) => (
    <UserGoalItem navigation={navigation} goal={goal} key={goal.id} />
  ));
  return (
    <>
      <HeaderWrapperView>
        <HeaderTitle style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          Goal
        </HeaderTitle>
        <HeaderTitle style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          Started
        </HeaderTitle>
        <HeaderTitle style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          Progress
        </HeaderTitle>
      </HeaderWrapperView>
      <BodyView>
        <SafeAreaView>
          <ScrollView>
            <List>{userGoalList}</List>
          </ScrollView>
        </SafeAreaView>
      </BodyView>
    </>
  );
};

export default observer(UserGoalList);
