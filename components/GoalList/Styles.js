import styled from "styled-components/native";

import { Image } from "react-native";
import { Card, Content } from "native-base";

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

export const StyledImage = styled(Image)`
  height: 200;
  flex: 1;
`;
export const StyledImageSearch = styled(Image)`
  width: 150;
  height: 200;
  flex: 1;
  flex-direction: row;
`;

export const StyledCard = styled(Card)`
  border-radius: 0;
`;

export const StyledContent = styled(Content)`
  border-radius: 25;
  width: 300;
`;

export const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: auto;
  padding-right: auto;
`;
