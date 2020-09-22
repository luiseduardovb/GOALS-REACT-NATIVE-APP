import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./Goaltem";
import SearchBar from "../Search/SearchBar";

//Store
import goalStore from "../../stores/goalStore";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const GoalList = ({ navigation, myGoal }) => {
  const [query, setQuery] = useState("");

  const goalList = goalStore.goals
    .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem
        goal={goal}
        key={goal.id}
        navigation={navigation}
        myGoal={myGoal}
      />
    ));

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* <SearchBar setQuery={setQuery} /> */}
          <List>{goalList}</List>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(GoalList);
