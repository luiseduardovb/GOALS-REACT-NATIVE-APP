import React, { useState } from "react";
import { observer } from "mobx-react";
import RootNavigator from "../../components/Navigation";

// Stores
import authStore from "../../stores/authStore";

//styles
import {
  Background,
  Title,
  SignInput,
  PressButton,
  SignButton,
  ChangeTo,
  HomeImageBackground,
} from "./styles";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      navigation.navigate("BottomTabNavigator", { user: user });
    } else {
      setUser({ ...(user.isValidUser = false) });
    }
  };

  return (
    <HomeImageBackground source={require(`../../image2.png`)}>
      <Background>
        <Title>Goal Tracker</Title>

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
          <Text style={{ fontSize: "16px", color: "#e5e5e5" }}>
            Show Password
          </Text>
        </TouchableOpacity>

        <PressButton onPress={handleSubmit}>
          <SignButton>Sign in</SignButton>
        </PressButton>

        <ChangeTo onPress={() => navigation.navigate("Signup")}>
          Don't have an account?
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 15,
            }}
          >
            Sign Up
          </Text>
        </ChangeTo>
      </Background>
    </HomeImageBackground>
  );
};

export default observer(Signin);
