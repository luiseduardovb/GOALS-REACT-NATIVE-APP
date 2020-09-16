import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//Components
import AddGoalNavigator from "./AddGoalNavigator";
import ExploreNavigator from "./ExploreNavigator";
import ProfileNavigator from "./ProfileNavigator";
import SearchNavigator from "./SearchNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          onPress: () => navigation.navigate("Profile"),
          tabBarIcon: () => <Icon name="user-alt" type="FontAwesome5" />,
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
