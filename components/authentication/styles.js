import styled from "styled-components/native";

export const Background = styled.View`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-right: 60px;
  padding-left: 60px;
  flex: 1;
`;

export const ButtonStyling = styled.View`
  height: 180%;
  align-items: center;
  justify-content: center;
`;

export const HomeImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ChangeTo = styled.Text`
  color: white;
  margin-top: 15px;
  color: red;
`;

export const SignInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;

export const PressButton = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  background-color: lightgrey;
  margin-top: 30px;
`;

export const SignButton = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

export const SignInStyle = styled.Text`
  color: black;
  font-size: 24;
  font-weight: bold;
  text-align: center;
`;

export const Title = styled.Text`
  color: red;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: white;
`;
