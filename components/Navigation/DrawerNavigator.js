import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Icon } from "native-base";

//components
import ProfileNavigator from "./ProfileNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import Signout from "../authentication/Signout";
import Home from "../Home";

import authStore from "../../stores/authStore";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = ({ navigation, route }) => {
  const submit = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  return (
    <Navigator
      initialRouteName="Main"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label={() => <Icon type="FontAwesome" name="sign-out" />}
              onPress={submit}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          drawerIcon: () => <Icon name="user-alt" type="FontAwesome5" />,
        }}
      />
      <Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => <Icon name="home" type="Entypo" />,
        }}
      />
      {/* <Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
    </Navigator>
  );
};

export default DrawerNavigator;
