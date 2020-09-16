import React from "react";

// Styling
import { HomeImageBackground, ButtonStyling, SignInStyle } from "./styles";
import authStore from "../../stores/authStore";
import { Spinner } from "native-base";

const Start = ({ navigation }) => {
  const user = authStore.user;

  return (
    <HomeImageBackground source={require(`../../focus.jpg`)}>
      <ButtonStyling>
        {user ? (
          <SignInStyle
            onPress={() => navigation.navigate("Profile", { user: user })}
          >
            Profile
          </SignInStyle>
        ) : (
          <SignInStyle onPress={() => navigation.navigate("Signin")}>
            Sign in
          </SignInStyle>
        )}
      </ButtonStyling>
    </HomeImageBackground>
  );
};

export default Start;
