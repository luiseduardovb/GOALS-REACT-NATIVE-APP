import styled from "styled-components/native";
import { Card } from "native-base";

export const StyledView = styled.View`
  width: 100%;
  height: 40;
  /* padding: 3px; */
  border-color: purple;
  border-width: 2;
  border-radius: 20;
  margin: auto;
  justify-content: center;
`;

export const StyledInner = styled.View`
  width: 30%;
  height: 40;
  border-radius: 15;
  background-color: navy;
  margin-top: auto;
  margin-bottom: auto;
`;
export const StyledInner2 = styled.View`
  width: 60%;
  height: 40;
  border-radius: 15;
  background-color: lightblue;
  margin-left: auto;
`;

export const StyledCard = styled(Card)`
  height: 300;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border-radius: 25;
  margin-top: 25px;
`;

export const StyledText = styled.Text`
  font-size: 20;
  color: white;
  position: absolute;
  z-index: 1;
  align-self: center;
`;

export const StyledTitle = styled.Text`
  font-size: 20;
  color: black;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 5;
`;
