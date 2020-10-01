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
import progressStore from "../../stores/progressStore";
import goalStore from "../../stores/goalStore";
import authStore from "../../stores/authStore";

const Leaderboard = ({ goal }) => {
  // console.log("Leaderboard -> goal", goal);
  const { user } = authStore;

  const LeaderboardGoal = goalStore.goals.find((_goal) => _goal.id === goal.id);
  // console.log("Leaderboard -> found goal", LeaderboardGoal.target);

  const something = LeaderboardGoal.profile.map((profiles) => (
    <LeaderboardItem
      profiles={profiles}
      user={user}
      key={profiles.id}
      LeaderboardGoal={LeaderboardGoal}
      // progress={progress}
    />
  ));

  // const leaderboardProgress = progressStore.goalProgresses.map((progress) => (
  //   <LeaderboardItem progress={progress} user={user} key={progress.id} />
  // ));

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
            <List>{something}</List>
            {/* <Text>SPACE</Text>
            <List>{leaderboardProgress}</List> */}
          </ScrollView>
        </SafeAreaView>
      </BodyView>
    </>
  );
};

export default observer(Leaderboard);
