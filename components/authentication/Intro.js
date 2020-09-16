import React from "react";

// Styling
import { HomeImageBackground, ButtonStyling, SignInStyle } from "./styles";
import authStore from "../../stores/authStore";

const Start = ({ navigation }) => {
  return (
    <HomeImageBackground source={require(`../../target.jpg`)}>
      <ButtonStyling>
        {authStore.user ? (
          <SignInStyle onPress={() => navigation.navigate("Goals")}>
            Skip Sign in
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
