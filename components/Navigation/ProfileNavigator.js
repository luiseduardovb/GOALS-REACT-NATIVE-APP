import React, { useState } from "react";
import { observer } from "mobx-react";
import { Icon } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";
import GoalDetail from "../GoalDetail";
import BottomTabNavigator from "../Navigation/BottomTabNavigator";
import styled from "styled-components";
import { color } from "react-native-reanimated";

const { Navigator, Screen } = createStackNavigator();

const ProfileNavigator = ({ navigation }) => {
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
        options={({ route }) => {
          return {
            title: route.params.goal.name,
            headerStyle: {
              backgroundColor: "#A88A93",
            },
            headerTintColor: "#fff",
          };
        }}
      />
    </Navigator>
  );
};

export default observer(ProfileNavigator);
