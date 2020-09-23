import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AddGoal from "../Buttons/AddGoal";
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
import progressStore from "../../stores/progressStore";

const Profile = () => {
  const { user } = authStore;
  if (!user) return <Spinner />;
  const goals = goalStore.goals.filter((goal) => goal.ownerId === user.id);

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
              <AddGoal />
            </Body>
          </UserInfo>
          <StyledView>
            <GoalList goals={goals} />
          </StyledView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(Profile);
