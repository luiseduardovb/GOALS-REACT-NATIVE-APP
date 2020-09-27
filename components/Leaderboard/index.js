import React from "react";
import { observer } from "mobx-react";
import { List, Text } from "native-base";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Components
import LeaderboardItem from "./LeaderboardItem";

//Styles
import { BodyView, HeaderWrapperView, HeaderTitle } from "./styles";

//Stores
import goalStore from "../../stores/goalStore";
import authStore from "../../stores/authStore";

const Leaderboard = ({ goal }) => {
  //   const { goal } = route.params;
  const { user } = authStore;

  const leaderboard = goalStore.goals.map((goal) => (
    <LeaderboardItem goal={goal} user={user} key={goal.id} />
  ));
  return (
    <>
      <HeaderWrapperView>
        <HeaderTitle style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          User
        </HeaderTitle>
        <HeaderTitle style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          Progress
        </HeaderTitle>
      </HeaderWrapperView>
      <BodyView>
        <SafeAreaView>
          <ScrollView>
            <List>{leaderboard}</List>
          </ScrollView>
        </SafeAreaView>
      </BodyView>
    </>
  );
};

export default observer(Leaderboard);
