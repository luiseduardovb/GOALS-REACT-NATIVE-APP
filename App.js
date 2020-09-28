import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//components
import RootNavigator from "./components/Navigation/index";
// import DrawerNavigator from "./components/Navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
