import { observer } from "mobx-react";
import { Body, Spinner } from "native-base";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AddGoal from "../Buttons/AddGoal";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../Search";
import GoalList from "../GoalList";
import authStore from "../../stores/authStore";
import progressStore from "../../stores/progressStore";

//Components
import ProgressBar from "../ProgressBar";
import GoalChart from "../GoalChart";
import CategoriesPieChart from "../CategoriesPieChart";

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
import goalStore from "../../stores/goalStore";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <GoalChart />
        <CategoriesPieChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Dashboard);
