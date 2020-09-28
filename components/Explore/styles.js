import { Button } from "native-base";
import styled from "styled-components/native";

export const StyledView = styled.View`
  /* margin-top: 5px; */
  padding-left: 4px;
  padding: 3px;
`;

export const ItemsStyled = styled(Button)`
  border: 2px;
  background-color: #e5dcdf;
  border-color: #1e315c;

  border-radius: 9px;
  padding: 3px;
  width: 100px;
  font-weight: bold;
  /* flex: 1; */
  text-align: center;
  color: #1e315c;
`;
export const ItemsTextStyled = styled.Text`
  padding: 3px;
  font-weight: bold;
  /* flex: 1; */
  text-align: center;
  color: #1e315c;
`;

export const HeaderWrapperView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
