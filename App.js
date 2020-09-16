import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//components
import RootNavigator from "./components/Navigation/index";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
