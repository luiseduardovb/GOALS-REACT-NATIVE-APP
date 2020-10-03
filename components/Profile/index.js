import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Spinner, Body } from "native-base";

// Components
import Signout from "../authentication/Signout";
import GoalList from "../GoalList/index";
import AddGoal from "../Buttons/AddGoal";

// Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

//Styles

import {
  UserInfo,
  FirstName,
  LastName,
  Name,
  ProfileImage,
  StyledView,
} from "./styles";

const Profile = ({ navigation }) => {
  const { user } = authStore;

  if (!user) return <Spinner />;

  const profile = profileStore.profiles.find(
    (profile) => profile.userId === user.id
  );
  const profileFollowedGoals = profile && profile.goal;
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#1F1F1F", height: 1000 }}>
        <ScrollView style={{ paddingBottom: 10 }}>
          <UserInfo>
            <Body>
              <ProfileImage
                source={{
                  uri:
                    "https://cdn.discordapp.com/attachments/747484451793010792/762001699312893952/PinClipart.com_appliance-repair-clipart_4968268_1.png",
                }}
              />
              <Name>
                <FirstName>{user.firstName}</FirstName>
                <LastName> {user.lastName}</LastName>
              </Name>
              <Text style={{ color: "white" }}>@{user.username}</Text>
            </Body>
            <Signout />
          </UserInfo>
          <StyledView>
            <GoalList
              profileFollowedGoals={profileFollowedGoals}
              goals={profileFollowedGoals}
              navigation={navigation}
            />
          </StyledView>
        </ScrollView>
      </SafeAreaView>
      <AddGoal profile={profile} />
    </>
  );
};

export default observer(Profile);
