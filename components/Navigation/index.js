import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { observer } from "mobx-react";

//components
import Intro from "../authentication/Intro";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Intro">
      <Screen name="Intro" component={Intro} options={{ headerShown: false }} />

      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);
