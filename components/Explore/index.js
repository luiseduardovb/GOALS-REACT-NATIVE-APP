import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { Body } from "native-base"; // unused import

//Styles
import { StyledView } from "./styles"; // unused import
import GoalList from "../GoalList";

const Explore = ({ navigation }) => {
  return (
    <View>
      <GoalList navigation={navigation} />
    </View>
  );
};

export default observer(Explore);
