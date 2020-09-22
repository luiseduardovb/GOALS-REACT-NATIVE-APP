import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./Goaltem";
// import AddGoal from "../buttons/AddGoal";

//Store
import goalStore from "../../stores/goalStore";
import SearchBar from "../Search/SearchBar";

const GoalList = ({ navigation, searchGoal }) => {
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
    <Content>
      <SearchBar setQuery={setQuery} />
      <List>{goalList}</List>
      {/* <AddGoal /> */}
    </Content>
  );
};

export default observer(GoalList);
