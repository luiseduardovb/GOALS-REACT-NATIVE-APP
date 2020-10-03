import React from "react";

//Components
import ProgressBar from "../ProgressBar";
import GoalChart from "../GoalChart";
import CategoriesPieChart from "../CategoriesPieChart";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

//Styles
import { StyledView } from "./styles";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import categoryStore from "../../stores/categoryStore";

const Dashboard = ({ navigation, category }) => {
  const profileOwnedGoals = profileStore.profiles.find(
    (profile) => profile.userId === authStore.user.id
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#1F1F1F", height: 1000 }}>
      <ScrollView style={{ marginTop: 30 }}>
        <GoalChart goals={profileOwnedGoals.goal} navigation={navigation} />
        <CategoriesPieChart category={category} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
