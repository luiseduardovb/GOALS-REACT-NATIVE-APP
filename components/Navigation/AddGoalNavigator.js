import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import AddGoal from "../AddGoal";

const { Navigator, Screen } = createStackNavigator();

const AddGoalNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="AddGoal"
        component={AddGoal}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AddGoalNavigator;
