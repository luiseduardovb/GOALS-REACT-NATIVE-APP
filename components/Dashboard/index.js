import React from "react";

//Components
import ProgressBar from "../ProgressBar";
import GoalChart from "../GoalChart";
import CategoriesPieChart from "../CategoriesPieChart";

//Styles
import { StyledView } from "./styles";

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
