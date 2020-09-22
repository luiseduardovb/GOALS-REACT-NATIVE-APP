import React, { useState } from "react"; // unused import
import { createStackNavigator } from "@react-navigation/stack";

//Components
import GoalModal from "../modals/GoalModal"; // unused import

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
