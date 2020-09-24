import styled from "styled-components/native";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native";

export const StyledView = styled.View`
  margin: auto;
`;
export const UpdateButtonStyled = styled(Icon)`
  left: 6px;
  bottom: 5px;
  color: #14213d;
  font-size: 29px;
`;
export const AddButtonStyled = styled(Icon)`
  color: white;
`;
export const AddTextStyled = styled.Text`
  padding: 5px;
  margin: 6px 30px 10px 0px;
  color: #14213d;
  font-size: 15px;
  font-weight: bold;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  color: blue;
  bottom: 50;
  right: 50;
  width: 50;
  height: 50;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
