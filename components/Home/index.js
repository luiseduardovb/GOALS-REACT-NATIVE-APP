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
          <SignInStyle
            onPress={() =>
              navigation.navigate("DrawerNavigator", { user: user })
            }
          >
            Skip Sign In
          </SignInStyle>
        ) : (
          <SignInStyle onPress={() => navigation.navigate("Signin")}>
            <Text> Sign in</Text>
          </SignInStyle>
        )}
      </ButtonStyling>
    </HomeImageBackground>
  );
};

export default Home;
