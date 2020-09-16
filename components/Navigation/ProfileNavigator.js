import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";

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
    </Navigator>
  );
};

export default ProfileNavigator;
