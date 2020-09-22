import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Dashboard from "../Dashboard";
import AddGoal from "../Buttons/AddGoal";
import SearchBar from "../Search";

const { Navigator, Screen } = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default DashboardNavigator;
