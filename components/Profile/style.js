import styled from "styled-components/native";

export const UserInfo = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
`;

export const ProfileImage = styled(Image)`
  color: #c1b3d1;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 90px;
  height: 90px;
  border-radius: 50;
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
