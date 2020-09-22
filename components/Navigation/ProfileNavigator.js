import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";
import GoalDetail from "../GoalDetail";

const { Navigator, Screen } = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Goal Detail"
        component={GoalDetail}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default ProfileNavigator;
