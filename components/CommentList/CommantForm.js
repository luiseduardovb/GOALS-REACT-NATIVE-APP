import React, { useState } from "react";
import { observer } from "mobx-react";

// Store
import commentStore from "../../stores/commentStore";
import { SafeAreaView } from "react-native-safe-area-context";

//Styles
import { CommentView, CommentInput, SubmitStyled } from "./styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Button, Text } from "native-base";

const CommentForm = ({ goal }) => {
  const [comments, setComment] = useState({
    comment: "",
    goalId: goal.id,
  });

  const handleSubmit = () => {
    commentStore.createComment(comments);
    setComment({
      comment: "",
      goalId: goal.id,
    });
  };

  return (
    <CommentView>
      <CommentInput
        multiline={true}
        placeholder="Write a Comment.."
        onChangeText={(comment) => setComment({ ...comments, comment })}
        value={comments.comment}
      />
      <SubmitStyled onPress={handleSubmit}>Send</SubmitStyled>
    </CommentView>
  );
};

export default observer(CommentForm);
