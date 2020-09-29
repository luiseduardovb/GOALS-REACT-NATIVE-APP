import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";
import { SafeAreaView } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";

//Components
import GoalItem from "./Goaltem";
import SearchBar from "../Search/SearchBar";
import AddGoal from "../Buttons/AddGoal";

//Store
import goalStore from "../../stores/goalStore";
import progressStore from "../../stores/progressStore";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const GoalList = ({ navigation, goals, myGoals, exploreGoals }) => {
  const [query, setQuery] = useState("");

  // const { user } = authStore;

  // const progress = progressStore.progresses;

  // const progressGoal = progressStore.progresses.filter(
  //   (progress) => progress.profileId === user.id
  // );

  // console.log("PROGRESS", progress);

  // const followedGoalList = profileStore.profiles
  //   .filter((profile) => profile.id === user.id)
  //   .map((goal) => (
  //     <GoalItem goal={goal} key={goal.id} navigation={navigation} />
  //   ));

  // console.log("FOLLOWED GOALS :", followedGoalList);

  const goalList = goals
    .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem
        goal={goal}
        key={goal.id}
        myGoals={myGoals}
        navigation={navigation}
      />
    ));

  //console.log("GOAL LIST", goalList);

  // const followed = goalList.goal.Profiles.filter(
  //   (profile) => profile.id === user.id
  // ).map((goal) => (
  //   <GoalItem goal={goal} key={goal.id} navigation={navigation} />
  // ));

  return (
    <SafeAreaView>
      {!exploreGoals && <SearchBar setQuery={setQuery} />}

      <ScrollView>{goalList}</ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalList);
