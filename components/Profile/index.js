import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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

// Components
import Signout from "../authentication/Signout";
import GoalList from "../GoalList/index";
import AddGoal from "../Buttons/AddGoal";

// Stores
import authStore from "../../stores/authStore";
import goalStore from "../../stores/goalStore";
import progressStore from "../../stores/progressStore";
import profileStore from "../../stores/profileStore";

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

const Profile = ({ navigation }) => {
  const { user } = authStore;

  if (!user) return <Spinner />;

  const profileOwnedGoals = profileStore.profiles.find(
    (profile) => profile.userId === user.id
  );
  // console.log("Profile -> profileOwnedGoals", profileOwnedGoals);

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
            <Signout />
          </UserInfo>
          <StyledView>
            <GoalList goals={profileOwnedGoals.goal} navigation={navigation} />
          </StyledView>
        </ScrollView>
      </SafeAreaView>
      <AddGoal />
    </>
  );
};

export default observer(Profile);
