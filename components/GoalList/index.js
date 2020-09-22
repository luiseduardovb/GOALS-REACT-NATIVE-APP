import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./Goaltem";

//Store
import goalStore from "../../stores/goalStore";
import SearchBar from "../Search/SearchBar"; // component not store, move it up

const GoalList = ({ navigation, myGoal }) => {
  const [query, setQuery] = useState("");
  const goalList = goalStore.goals
    .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))
    .map((goal) => (
      <GoalItem
        searchGoal={searchGoal}
        goal={goal}
        key={goal.id}
        navigation={navigation}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Content>
        <List>{goalList}</List>
      </Content>
    </>
  );
};

export default observer(GoalList);
