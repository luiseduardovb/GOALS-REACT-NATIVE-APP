import React from "react";

//Native Base
import { Text, Spinner, Right, Body } from "native-base";

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

const Profile = () => {
  return (
    <UserInfo>
      <BackgroundImage>
        <Body>
          <ProfileImage />
          <Name>
            <FirstName></FirstName>
            <LastName></LastName>
          </Name>
          <UserName>Username: @</UserName>
          <Right></Right>
        </Body>
      </BackgroundImage>
    </UserInfo>
  );
};

export default observer(Profile);
