import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explore from "../Explore";
import GoalList from "../GoalList";
import GoalDetail from "../GoalDetail";

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
      <Screen
        name="Goals"
        component={GoalList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Goal Detail"
        component={GoalDetail}
        options={({ route }) => {
          const goal = route.params.goal;
          return {
            title: goal.name,
            headerStyle: {
              backgroundColor: "#A88A93",
            },
            headerTintColor: "#fff",
            // headerTransparent: true,
            // headerBackTitle: false,
          };
        }}
      />
    </Navigator>
  );
};

export default ExploreNavigator;
