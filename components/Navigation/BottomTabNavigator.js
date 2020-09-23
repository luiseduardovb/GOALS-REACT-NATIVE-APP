import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//Components
// import AddGoalNavigator from "./AddGoalNavigator";
import ExploreNavigator from "./ExploreNavigator";
import DashboardNavigator from "./DashboardNavigator";
import SearchNavigator from "./SearchNavigator";

import DrawerNavigator from "./DrawerNavigator";

import GoalModal from "../modals/GoalModal";
// import ProgressCircle from "../ProgressCircle";

// import AddGoal from "../AddGoal/index";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: "#c89f9c",
        activeTintColor: "#4a4e69",
      }}
    >
      <Screen
        name="Menu"
        component={DashboardNavigator}
        options={{
          tabBarIcon: () => (
            <Icon
              onPress={() => navigation.openDrawer()}
              type="Entypo"
              name="menu"
            />
          ),
          tabBarLabel: () => false,
        }}
      />
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
