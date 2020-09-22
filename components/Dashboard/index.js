import { observer } from "mobx-react";
import { Body } from "native-base"; // unused import
import React from "react";
import { Text, View } from "react-native"; // unused import
import AddGoal from "../Buttons/AddGoal";
import GoalList from "../GoalList";
//Styles
import { StyledView } from "./styles";

const Dashboard = ({ navigation }) => {
  return (
    <StyledView>
      <AddGoal />
      <GoalList navigation={navigation} />
    </StyledView>
  );
};

export default observer(Dashboard);
