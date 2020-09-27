import React from "react";
import { Text } from "native-base";

// Styling
import { HomeImageBackground, ButtonStyling, SignInStyle } from "./styles";

//Stores
import authStore from "../../stores/authStore";
import { Spinner } from "native-base";

const Home = ({ navigation }) => {
  const user = authStore.user;

  return (
    <HomeImageBackground source={require(`../../focus.jpg`)}>
      <ButtonStyling>
        {user ? (
          navigation.navigate("DrawerNavigator", { user: user })
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
