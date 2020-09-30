import React, { useState } from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components
import ExploreNavigator from "./ExploreNavigator";
import DashboardNavigator from "./DashboardNavigator";
import ProfileNavigator from "./ProfileNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: "#525252",
        activeTintColor: "#525252",

        activeBackgroundColor: "#707070",
      }}
    >
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: user.username,
          onPress: () => navigation.navigate("Profile"),

          tabBarIcon: () => <Icon name="user-alt" type="FontAwesome5" />,
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
