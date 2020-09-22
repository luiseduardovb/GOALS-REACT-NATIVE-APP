import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { Body } from "native-base";

//Styles
import { StyledView } from "./styles";
import GoalList from "../GoalList";

const Explore = ({ navigation }) => {
  return (
    <View>
      <GoalList navigation={navigation} />
    </View>
  );
};

export default observer(Explore);
