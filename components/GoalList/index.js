import React from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./GoalItem";
import AddGoal from "../buttons/AddGoal";

//Store
import goalStore from "../../stores/goalStore";

const GoalList = ({ navigation }) => {
  const goalList = goalStore.goals.map((goal) => (
    <GoalItem goal={goal} key={goal.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{goalList}</List>
      <AddGoal />
    </Content>
  );
};

export default observer(GoalList);
