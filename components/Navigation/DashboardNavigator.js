import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Dashboard from "../Dashboard";
import { observer } from "mobx-react";
import AddGoal from "../Buttons/AddGoal";

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

export default observer(DashboardNavigator);
