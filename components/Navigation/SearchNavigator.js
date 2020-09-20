import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Search from "../Search/index";

const { Navigator, Screen } = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default SearchNavigator;
