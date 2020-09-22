import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//Native Base
import {
  Text,
  Spinner,
  Right, // unused import
  Body,
  Left, // unused import
  Image, // unused import
  Thumbnail, // unused import
  View, // unused import
} from "native-base";

//Styles
import {
  UserInfo,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  StyledView,
  UserName, // unused import
  BackgroundImage, // unused import
} from "./styles";
import authStore from "../../stores/authStore";
import Signout from "../authentication/Signout"; // unused import
import GoalList from "../GoalList/index";
import goalStore from "../../stores/goalStore"; // unused import
import profileStore from "../../stores/goalStore"; // unused import

const Profile = ({ navigation }) => {
  const { user } = authStore;
  if (!user) return <Spinner />;
  // this code below doesn't work. It needs a parent element.
  return (

    <SafeAreaView>
      <ScrollView>
        <UserInfo>
          {/* <Right style={{ marginLeft: 320 }}>
            <Signout />
          </Right> */}
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
        <StyledView>
          <GoalList navigation={navigation} />
        </StyledView>
      </ScrollView>
    </SafeAreaView>

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
