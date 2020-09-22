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
  View,
} from "native-base";

//Styles
import {
  UserInfo,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  StyledView,
  UserName,
  BackgroundImage,
} from "./styles";
import authStore from "../../stores/authStore";
import Signout from "../authentication/Signout";
import GoalList from "../GoalList/index";
import goalStore from "../../stores/goalStore";
import profileStore from "../../stores/goalStore";

const Profile = () => {
  const { user } = authStore;
  if (!user) return <Spinner />;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <UserInfo>
            <Body>
              <ProfileImage
                source={{
                  uri:
                    "https://wincomm-cdn-prod-westus.azureedge.net/libs/assets/img/default-user-placeholder.png",
                }}
              />
              <Name>
                <FirstName>{user.firstName}</FirstName>
                <LastName> {user.lastName}</LastName>
              </Name>
              <Text>@{user.username}</Text>
            </Body>
          </UserInfo>
          <GoalList myGoal />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(Profile);
