import styled from "styled-components/native";
import { Icon } from "native-base";
import { Image } from "react-native";
import { Card, Content, View } from "native-base";

export const AddButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: grey;
  margin-top: 30px;
`;

export const AddButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const DeleteGoal = styled(Icon)`
  color: red;
  position: absolute;
  right: 10px;
  bottom: 3px;
`;

export const ButtonWrapper = styled(View)`
  margin-top: 33px;
  display: flex;
  flex-direction: row;
`;

export const StyledImage = styled(Image)`
  height: 200px;
  width: 200px;
  flex: 1;
`;
export const StyledImageSearch = styled(Image)`
  width: 150px;
  height: 200px;
  flex: 1;
  flex-direction: row;
`;

export const StyledCard = styled(Card)`
  border-radius: 0px;
`;

export const StyledContent = styled(Content)`
  border-radius: 25px;
  width: 300px;
`;

export const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: auto;
  padding-right: auto;
`;
