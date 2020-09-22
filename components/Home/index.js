import React from "react";
import { Text } from "native-base"; // unused import

// Styling
import { HomeImageBackground, ButtonStyling, SignInStyle } from "./styles";

//Stores
import authStore from "../../stores/authStore";
import { Spinner } from "native-base"; // unused import

const Home = ({ navigation }) => {
  const user = authStore.user;

  return (
    // this `require` imports the image. Move the import to the top.
    <HomeImageBackground source={require(`../../focus.jpg`)}>
      <ButtonStyling>
        {user ? (
          <SignInStyle
            onPress={() =>
              navigation.navigate("DrawerNavigator", { user: user })
            }
          >
            {/* this text should change to something like "Dashboard" */}
            Skip Sign In
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

export default Home;
