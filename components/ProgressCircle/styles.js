import styled from "styled-components/native";
import { Card } from "native-base";

export const StyledView = styled.View`
  margin: auto;
  margin-top: 35px;
`;

export const StyledCard = styled(Card)`
  height: 275px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border-radius: 25px;
  margin-top: 25px;
`;

export const StyledTitle = styled.Text`
  font-size: 20px;
  color: black;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 25px;
  padding-bottom: 30px;
`;
