import React, { useState } from "react";
import { observer } from "mobx-react";

//store
import authStore from "../stores/authStore";

//styles
import {
  Background,
  Title,
  SignInput,
  PressButton,
  SignButton,
  ChangeTo,
} from "./styles";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({});

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Profile");
  };

  return (
    <Background>
      <Title>Sign up</Title>

      <SignInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="white"
        autoCapitalize="none"
      />
      <SignInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="First name"
        placeholderTextColor="white"
      />
      <SignInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="Last Name"
        placeholderTextColor="white"
      />
      <SignInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <SignInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <PressButton onPress={handleSubmit}>
        <SignButton>Sign up</SignButton>
      </PressButton>
      <ChangeTo onPress={() => navigation.navigate("Signin")}>
        Already have an account? Sign in
      </ChangeTo>
    </Background>
  );
};

export default observer(Signup);
