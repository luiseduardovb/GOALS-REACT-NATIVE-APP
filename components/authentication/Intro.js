import React from "react";

// Styling
import { HomeImageBackground, ButtonStyling, SignInStyle } from "./styles";
import authStore from "../../stores/authStore";
import { Spinner } from "native-base";

// REVIEW: Organize your imports

// REVIEW: Intro shouldn't be in the `authentication` folder
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
