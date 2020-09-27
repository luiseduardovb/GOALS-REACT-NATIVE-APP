import styled from "styled-components/native";
import { Card } from "native-base";

export const LeaderBoard = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const Popularity = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const PersonalProgress = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const StyledCard = styled(Card)`
  height: 275;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border-radius: 25;
  margin-top: 25px;
`;

export const StyledTitle = styled.Text`
  font-size: 20;
  color: black;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 25;
  padding-bottom: 30;
`;
