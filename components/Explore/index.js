import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles

import { StyledView } from "./styles";
import AddCategory from "../Buttons/AddCategory";
import { Body, Header, Left, List, Right, Text, View } from "native-base";
import SearchBar from "../Search/SearchBar";
import categoryStore from "../../stores/categoryStore";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  const [query, setQuery] = useState("");

  const categoryList = categoryStore.categories
    // .filter((category) =>
    //   category.name.toLowerCase().includes(query.toLowerCase())
    // )
    .map((category) => <ExploreItem category={category} key={category.id} />);
  return (
    <View>
      <Header>
        <Left />
        <SearchBar setQuery={setQuery} />
        <Right />
        <AddCategory />
      </Header>
      <View>{categoryList}</View>
    </View>
  );
};

export default observer(Explore);
