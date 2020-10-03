import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import GoalList from "../GoalList";

//Stores
import categoryStore from "../../stores/categoryStore";

//Styles
import { StyledView, ItemsStyled, ItemsTextStyled } from "./styles";
import { Icon, Button, List, View } from "native-base";
import goalStore from "../../stores/goalStore";
import Dashboard from "../Dashboard";

const ExploreItem = ({ category, navigation }) => {
  const [isZah, setIsZah] = useState(false);

  const handlePress = () => {
    setIsZah(!isZah);
  };

  const goal = goalStore.goals;

  const whatever = category.Goals.filter(
    (goal) => goal.Tag.catId === category.id
  );

  return (
    <>
      <StyledView>
        <ItemsStyled>
          <ItemsTextStyled onPress={handlePress}>
            {category.name}
          </ItemsTextStyled>
        </ItemsStyled>
      </StyledView>
      {/* <List>{whatever}</List> */}
      {isZah ? (
        <GoalList goals={whatever} navigation={navigation} exploreGoals />
      ) : (
        <GoalList goals={goal} navigation={navigation} exploreGoals />
      )}
      <Dashboard category={category} />
    </>
  );
};

export default observer(ExploreItem);
