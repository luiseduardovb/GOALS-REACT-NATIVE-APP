import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//components
import RootNavigator from "./components/Navigation/index"; // no need for "/index"
import DrawerNavigator from "./components/Navigation/DrawerNavigator"; // unused import

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
