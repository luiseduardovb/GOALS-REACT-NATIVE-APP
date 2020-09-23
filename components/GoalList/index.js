import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./Goaltem";
import SearchBar from "../Search/SearchBar";
import AddGoal from "../Buttons/AddGoal";

//Store
import goalStore from "../../stores/goalStore";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const GoalList = ({ navigation, myGoal, goals }) => {
  const [query, setQuery] = useState("");

  const goalList = goals
    // .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem goal={goal} key={goal.id} navigation={navigation} />
    ));
    


  return (
    <SafeAreaView>
      <SearchBar setQuery={setQuery} />
      <AddGoal />
      <ScrollView>
        <List>{goalList}</List>
      </ScrollView>
    </SafeAreaView>

  );
};

export default observer(GoalList);
