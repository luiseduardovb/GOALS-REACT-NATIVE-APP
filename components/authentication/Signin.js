import React, { useState } from "react";
import { observer } from "mobx-react";
import RootNavigator from "../../components/Navigation";

//styles
import {
  Background,
  Title,
  SignInput,
  PressButton,
  SignButton,
  ChangeTo,
} from "./styles";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";

// REVIEW: Organize your imports

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isValidUser: true,
  });
  const [appearPass, setAppearPass] = useState(false);

  const PasswordAppearance = () => {
    setAppearPass(!appearPass);
  };
  const handleSubmit = async () => {
    await authStore.signin(user);

    if (authStore.user) {
      navigation.replace("Profile", { user: user });
    } else {
      setUser({ ...(user.isValidUser = false) });
    }
  };

  return (
    <Background>
      <Title>Sign in</Title>

      <SignInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="white"
        autoCapitalize="none"
        value={user.username}
      />

      <SignInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={appearPass ? false : true}
        value={user.password}
      />

      <TouchableOpacity onPress={PasswordAppearance}>
        <Text style={{ fontSize: 16, color: "grey" }}>Show Password</Text>
      </TouchableOpacity>

      <PressButton onPress={handleSubmit}>
        <SignButton>Sign in</SignButton>
      </PressButton>

      <ChangeTo onPress={() => navigation.navigate("Signup")}>
        Don't have an account? Sign Up
      </ChangeTo>
    </Background>
  );
};

export default observer(Signin);
