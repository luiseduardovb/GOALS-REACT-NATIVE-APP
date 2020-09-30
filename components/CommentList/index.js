import { observer } from "mobx-react";
import { List, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import commentStore from "../../stores/commentStore";
import CommantForm from "./CommantForm";
import CommentItem from "./CommentItem";
import { HeaderWrapperView, ListStyle } from "./styles";

const CommentList = ({ comments }) => {
  const commentList = comments.map((cmt) => (
    <CommentItem cmt={cmt} key={cmt.id} />
  ));
  return (
    <SafeAreaView>
      <ScrollView>{commentList}</ScrollView>
    </SafeAreaView>
  );
};

export default observer(CommentList);
