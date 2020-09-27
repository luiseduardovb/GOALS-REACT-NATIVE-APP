import React from "react";

//Components
import ProgressBar from "../ProgressBar";
import GoalChart from "../GoalChart";
import CategoriesPieChart from "../CategoriesPieChart";

//Styles
import { StyledView } from "./styles";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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

export default Dashboard;
