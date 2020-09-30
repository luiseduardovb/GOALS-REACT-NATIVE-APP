import styled from "styled-components/native";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native";

// Add Button
export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #14213d;
  bottom: 95px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const AddButtonStyled = styled(Icon)`
  color: #a88a93;
`;
export const FollowButtonStyled = styled(Icon)`
  color: black;
`;

// Add Category
export const AddCategorylButtonStyled = styled(Icon)`
  color: #3d3d3d;
  top: 15px;
  right: 5px;
`;

// Update Progress
export const UpdateProgressButtonStyled = styled(Icon)`
  left: 6px;
  bottom: 5px;
  top: 5px;
  color: #14213d;
  font-size: 30px;
`;

export const UpdateProgressTextStyled = styled.Text`
  color: #14213d;
  font-size: 15px;
  font-weight: bold;
  left: 42px;
  bottom: 18px;
`;

// Update Goal
export const UpdateGoalTextStyled = styled.Text`
  color: #14213d;
  font-size: 11px;
  font-weight: bold;
  right: 5px;
  top: 4px;
`;

export const UpdateGoalButtonStyled = styled(Icon)`
  color: #14213d;
  font-size: 30px;
`;
