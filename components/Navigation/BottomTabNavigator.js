import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//Components
// import AddGoalNavigator from "./AddGoalNavigator"; // unused import
import ExploreNavigator from "./ExploreNavigator";
import DashboardNavigator from "./DashboardNavigator";
import SearchNavigator from "./SearchNavigator";

import DrawerNavigator from "./DrawerNavigator"; // unused import

import GoalModal from "../modals/GoalModal"; // unused import
import AddGoal from "../AddGoal/index"; // unused import
import ProgressCircle from "../ProgressCircle"; // unused import

// import AddGoal from "../AddGoal/index"; // unused import


const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false); // unused method

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          onPress: () => navigation.navigate("Dashboard"),
          tabBarIcon: () => <Icon name="dashboard" type="AntDesign" />,
        }}
      />
      <Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          onPress: () => navigation.navigate("Explore"),
          tabBarIcon: () => <Icon name="world" type="Fontisto" />,
        }}
      />
      {/* <Screen
        name="AddGoal"
        component={AddGoal}
        options={{
          mode: "modal",
          onPress: () => setIsOpen(false),
          tabBarIcon: () => <Icon name="plus" type="SimpleLineIcons" />,
        }}
      /> */}
      <Screen
        name="Search"
        component={SearchNavigator}
        options={{
          onPress: () => navigation.navigate("Search"),
          tabBarIcon: () => <Icon name="search" type="Ionicons" />,
        }}
      />
      {/* <Screen
        name="Progress Circle"
        component={ProgressCircle}
        options={{
          onPress: () => navigation.navigate("Progress Circle"),
          tabBarIcon: () => <Icon name="search" type="Ionicons" />,
        }}
      /> */}
    </Navigator>
  );
};

export default BottomTabNavigator;
