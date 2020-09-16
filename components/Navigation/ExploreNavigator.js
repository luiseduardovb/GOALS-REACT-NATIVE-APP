import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explore from "../Explore";

const { Navigator, Screen } = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default ExploreNavigator;
