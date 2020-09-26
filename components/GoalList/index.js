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



const GoalList = ({ navigation, myGoal, goals }) => {
  const [query, setQuery] = useState("");

  const goalList = goals
    .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem goal={goal} key={goal.id} navigation={navigation} />
    ));

  return (
    <SafeAreaView>
      <SearchBar setQuery={setQuery} />
      <ScrollView>
        <List>{goalList}</List>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalList);
