import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Native Base
import {
  Text,
  Spinner,
  Right,
  Body,
  Left,
  Image,
  Thumbnail,
} from "native-base";

//Styles
import {
  UserInfo,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  UserName,
  BackgroundImage,
} from "./styles";
import authStore from "../../stores/authStore";
import Signout from "../authentication/Signout";

const Profile = ({ route }) => {
  const { user } = route.params;
  if (!authStore.user) return <Spinner />;
  return (
    <SafeAreaView>
      <ScrollView>
        <UserInfo>
          <Right style={{ marginLeft: 320 }}>
            <Signout />
          </Right>
          <Body>
            <ProfileImage
              source={{
                uri:
                  "https://wincomm-cdn-prod-westus.azureedge.net/libs/assets/img/default-user-placeholder.png",
              }}
            />
            <Name>
              <FirstName>{authStore.user.firstName}</FirstName>
              <LastName> {authStore.user.lastName}</LastName>
            </Name>
            <Text>@{user.username}</Text>
          </Body>
        </UserInfo>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);
