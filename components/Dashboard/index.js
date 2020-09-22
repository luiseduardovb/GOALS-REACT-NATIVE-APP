import { observer } from "mobx-react";
import { Body } from "native-base";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AddGoal from "../Buttons/AddGoal";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../Search";
import GoalList from "../GoalList";
//Styles
import {
  StyledView,
  UserInfo,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  UserName,
  BackgroundImage,
} from "./styles";

const Dashboard = ({ navigation }) => {
  return (
    <>
      <StyledView>
        <GoalList navigation={navigation} />
      </StyledView>
    </>
  );
};

export default observer(Dashboard);
