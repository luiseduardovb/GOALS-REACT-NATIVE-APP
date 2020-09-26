import React from "react";

//Styles
import { StyledView, ItemsStyled } from "./styles";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
import { observer } from "mobx-react";

const ExploreItem = ({ category }) => {
  return (
    <StyledView>
      <ItemsStyled>{category.name}</ItemsStyled>
    </StyledView>
  );
};

export default observer(ExploreItem);
