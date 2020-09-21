import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

//Components
import GoalItem from "./Goaltem";

//Store
import goalStore from "../../stores/goalStore";
import SearchBar from "../Search/SearchBar";

const GoalList = ({ navigation, myGoal }) => {
  const [query, setQuery] = useState("");

  const goalList = goalStore.goals.map((goal) => (
    <GoalItem
      goal={goal}
      key={goal.id}
      navigation={navigation}
      myGoal={myGoal}
    />
  ));
  // .filter((goal) => goal.name.toLowerCase().includes(query.toLowerCase()))

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
