import styled from "styled-components/native";

import { Icon } from "native-base";

export const CloseButtonStyled = styled(Icon)`
  color: #4a4e69;
  margin-bottom: 15px;
`;

export const CreateButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  border: 1px;
  border-color: #9d8189;
`;

export const CreateButtonText = styled.Text`
  color: #1b4965;
  font-weight: bold;
  font-size: 18px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #000000aa;
`;

export const ModalView = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 50px 30px 170px;
`;

export const ModalTitle = styled.Text`
  color: #1b4965;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: white;
  text-align: center;
`;

export const ModalTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: darkblue;
  border-bottom-color: #3d5a80;
  border-bottom-width: 1px;
`;
