import React from "react";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Icon } from "native-base";
import { SighoutButton } from "./styles";

const Signout = () => {
  const navigation = useNavigation();

  const submit = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  return <SighoutButton onPress={submit} type="FontAwesome" name="sign-out" />;
};

export default observer(Signout);
