import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Icon, Text } from "native-base";

//components
import ProfileNavigator from "./ProfileNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import Signout from "../authentication/Signout";
import Home from "../Home";

import authStore from "../../stores/authStore";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = ({ navigation, route }) => {
  const { user } = route.params;
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
              label={() => <Text style={{ fontSize: 14 }}>Sign Out</Text>}
              icon={() => <Icon type="FontAwesome" name="sign-out" />}
              onPress={submit}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Screen
        name={user.username}
        component={ProfileNavigator}
        options={{
          title: user.username,

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
