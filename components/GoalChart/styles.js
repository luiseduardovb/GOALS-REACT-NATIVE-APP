import styled from "styled-components/native";
import { Card } from "native-base";

export const StyledView = styled.View`
  width: 100%;
  height: 40px;
  /* padding: 3px; */
  border-color: purple;
  border-width: 2px;
  border-radius: 20px;
  margin: auto;
  justify-content: center;
`;

export const StyledInner = styled.View`
  width: 30%;
  height: 40px;
  border-radius: 15px;
  background-color: navy;
  margin-top: auto;
  margin-bottom: auto;
`;
export const StyledInner2 = styled.View`
  width: 60%;
  height: 40px;
  border-radius: 15px;
  background-color: lightblue;
  margin-left: auto;
`;

export const StyledCard = styled(Card)`
  /* height: 300; */
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border-radius: 25px;
  margin-top: 25px;
  background-color: #cccccc;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: white;
  position: absolute;
  z-index: 1;
  align-self: center;
`;

export const StyledTitle = styled.Text`
  font-size: 20px;
  color: black;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 5px;
`;
