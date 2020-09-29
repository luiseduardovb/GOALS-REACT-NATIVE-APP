import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import GoalList from "../GoalList";

//Stores
import categoryStore from "../../stores/categoryStore";

//Styles
import { StyledView, ItemsStyled, ItemsTextStyled } from "./styles";
import { Icon, Button } from "native-base";

const ExploreItem = ({ category, navigation }) => {
  // const goals = goalStore.goals.filter((goal) => goal.id === category.id);

  return (
    <>
      <StyledView>
        <ItemsStyled iconRight light>
          <ItemsTextStyled>CATEGORY.NAME</ItemsTextStyled>
          <Icon name="arrow-down" />
        </ItemsStyled>
      </StyledView>
      {/* <GoalList goals={goals} navigation={navigation} category={category} /> */}
    </>
  );
};

export default observer(ExploreItem);
