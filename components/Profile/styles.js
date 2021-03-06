import styled from "styled-components/native";
import { Image } from "react-native";

export const UserInfo = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
`;

export const ProfileImage = styled(Image)`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 90px;
  height: 90px;
  border-radius: 50px;
`;

export const Name = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
  color: white;
`;

export const FirstName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const LastName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* margin-left: 40px;
  margin-right: 40px;
  margin-top: 25; */
`;
