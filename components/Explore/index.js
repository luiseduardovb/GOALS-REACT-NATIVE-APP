import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { HeaderWrapperView } from "./styles";
import { Body, Header, Left, List, Right, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

//Components
import AddCategory from "../Buttons/AddCategory";
import SearchBar from "../Search/SearchBar";

//Stores
import categoryStore from "../../stores/categoryStore";
import ExploreItem from "./ExploreItem";

const Explore = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const categoryList = categoryStore.categories
    .filter(
      (category) =>
        category.name &&
        category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => (
      <ExploreItem
        navigation={navigation}
        category={category}
        key={category.id}
      />
    ));

  return (
    <View>
      <Header>
        <Left />
        <SearchBar setQuery={setQuery} />
        <Right />
        <AddCategory />
      </Header>
      <SafeAreaView>
        <ScrollView horizontal={true}>
          <HeaderWrapperView>{categoryList}</HeaderWrapperView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default observer(Explore);
