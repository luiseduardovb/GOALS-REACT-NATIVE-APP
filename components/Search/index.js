import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "./SearchBar";
import GoalList from "../GoalList/index";

//Styles
import { StyledView } from "./styles";
import { Container, Content } from "native-base";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <Container style={{ alignItems: "center" }}>
      <GoalList searchGoal />
    </Container>
  );
};

export default Search;
