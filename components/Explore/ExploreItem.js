import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import GoalList from "../GoalList";

//Stores
import categoryStore from "../../stores/categoryStore";

//Styles
import { StyledView, ItemsStyled, ItemsTextStyled } from "./styles";
import { Icon, Button } from "native-base";
import goalStore from "../../stores/goalStore";

const ExploreItem = ({ category, navigation }) => {
  // const goals = goalStore.goals.filter(
  //   (goal) => goal.category === category.name
  // );

  return (
    <>
      <StyledView>
        <ItemsStyled>
          <ItemsTextStyled>{category.name}</ItemsTextStyled>
        </ItemsStyled>
      </StyledView>
      {/* <GoalList goals={goals} navigation={navigation} exploreGoals /> */}
    </>
  );
};

export default observer(ExploreItem);
