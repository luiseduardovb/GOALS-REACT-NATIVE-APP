import { observer } from "mobx-react";
import { Text } from "native-base";
import React from "react";
import { StyledView, ItemsStyled, ItemsTextStyled } from "./styles";

const CommentItem = ({ cmt }) => {
  return <ItemsTextStyled> - {cmt.comment}</ItemsTextStyled>;
};

export default observer(CommentItem);
