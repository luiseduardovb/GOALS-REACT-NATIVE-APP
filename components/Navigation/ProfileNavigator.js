import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";
import GoalDetail from "../GoalDetail";
import BottomTabNavigator from "../Navigation/BottomTabNavigator";
import { Icon } from "native-base";


const { Navigator, Screen } = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => <Icon type="Entypo" name="menu" />,
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
