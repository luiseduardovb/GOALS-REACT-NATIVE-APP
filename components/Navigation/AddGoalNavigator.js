import React, { useState } from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

//Components

//Components
import GoalModal from "../modals/GoalModal";

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

export default observer(AddGoalNavigator);
