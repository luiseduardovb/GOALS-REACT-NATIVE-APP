import React from "react";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Icon } from "native-base";

const Signout = () => {
  const navigation = useNavigation();

  const submit = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  return <Icon onPress={submit} type="AntDesign" name="logout" />;
};

export default observer(Signout);
