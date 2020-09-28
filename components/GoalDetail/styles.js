import styled from "styled-components/native";
import { Card } from "native-base";

export const LeaderBoard = styled.View`
  margin-top: 30%;
`;

export const Popularity = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1;
`;

export const PersonalProgress = styled.View`
  border-bottom-color: grey;
  border: 1px;
  margin: 5px;
  background-color: #0a101f;
`;
export const TextLeaderboardStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  text-align: center;
  color: #7a7a7a;
`;
export const TextDetailStyled = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding: 30px 0px 0px 10px;
  color: #19294d;
`;
export const TextProgressStyled = styled.Text`
  font-size: 15px;
  margin: 5px;
  text-align: center;
  color: #dcd0d4;
  font-weight: bold;
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
  color: #7a7a7a;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 25;
  padding-bottom: 30;
`;
