import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Components
import GoalItem from "./Goaltem";
import SearchBar from "../Search/SearchBar";

const GoalList = ({
  navigation,
  goals,
  category,
  myGoals,
  exploreGoals,
  profileFollowedGoals,
}) => {
  const [query, setQuery] = useState("");

  const goalList = goals
    .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem
        goal={goal}
        key={goal.id}
        myGoals={myGoals}
        navigation={navigation}
        category={category}
        profileFollowedGoals={profileFollowedGoals}
      />
    ));

  return (
    <SafeAreaView>
      {!exploreGoals && <SearchBar setQuery={setQuery} />}

      <ScrollView>{goalList}</ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalList);
