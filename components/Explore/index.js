import React from "react";
import { observer } from "mobx-react";

// Components
import GoalList from "../GoalList";

//Styles
import { Text, View } from "react-native";
import { Body, Icon, Spinner } from "native-base";
import { StyledView } from "./styles";

//Stores
import authStore from "../../stores/authStore";
import progressStore from "../../stores/progressStore";
import goalStore from "../../stores/goalStore";

const Explore = ({ navigation }) => {
  const { user } = authStore;
  if (!user) return <Spinner />;

  return <StyledView></StyledView>;
};

export default observer(Explore);
