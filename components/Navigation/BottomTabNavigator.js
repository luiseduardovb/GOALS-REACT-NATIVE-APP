import React, { useState } from "react";
import { observer } from "mobx-react";
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
        inactiveTintColor: "#FCA311",
        activeTintColor: "#FCA311",
        activeBackgroundColor: "#F5F5F5",
        inactiveBackgroundColor: "#1F1F1F",
      }}
    >
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: user.username,
          onPress: () => navigation.navigate("Profile"),

          tabBarIcon: () => (
            <Icon
              name="user-alt"
              type="FontAwesome5"
              style={{ color: "#FCA311" }}
            />
          ),
        }}
      />
      <Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          onPress: () => navigation.navigate("Dashboard"),
          tabBarIcon: () => (
            <Icon
              name="dashboard"
              type="AntDesign"
              style={{ color: "#FCA311" }}
            />
          ),
        }}
      />
      <Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          onPress: () => navigation.navigate("Explore"),
          tabBarIcon: () => (
            <Icon name="search" type="Ionicons" style={{ color: "#FCA311" }} />
          ),
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

export default observer(BottomTabNavigator);
