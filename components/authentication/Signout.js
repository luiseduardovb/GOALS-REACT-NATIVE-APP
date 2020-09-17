import React from "react";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Icon } from "native-base";

// REVIEW: Organize your imports

const Signout = () => {
  const navigation = useNavigation();
  const submit = async () => {
    await authStore.signout();
    navigation.navigate("Intro");
  };
  return <Icon onPress={submit} type="AntDesign" name="logout" />;
};

export default observer(Signout);
