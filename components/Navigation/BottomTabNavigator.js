import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//Components
import AddGoalNavigator from "./AddGoalNavigator";
import ExploreNavigator from "./ExploreNavigator";
import DashboardNavigator from "./DashboardNavigator";
import SearchNavigator from "./SearchNavigator";
import DrawerNavigator from "./DrawerNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
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
      <Screen
        name="AddGoal"
        component={AddGoalNavigator}
        options={{
          onPress: () => navigation.navigate("AddGoal"),
          tabBarIcon: () => <Icon name="plus" type="SimpleLineIcons" />,
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
    </Navigator>
  );
};

export default BottomTabNavigator;
