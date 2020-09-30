import React, { useState } from "react";
import { observer } from "mobx-react";

// Store
import commentStore from "../../stores/commentStore";
import { SafeAreaView } from "react-native-safe-area-context";

//Styles
import { CommentView, CommentInput } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Button, Text } from "native-base";

const Comment = ({ goal }) => {
  const [comments, setComment] = useState({
    comment: "",
    goalId: goal.id,
  });

  const handleSubmit = () => {
    commentStore.createComment(comments);
  };

  return (
    <SafeAreaView>
      <CommentView>
        <TextInput
          placeholder="Write a Comment.."
          onChangeText={(comment) => setComment({ ...comments, comment })}
        />
        <Button placeholder="Submit Comment" onPress={handleSubmit}>
          <Text>submit</Text>
        </Button>
      </CommentView>
    </SafeAreaView>
  );
};

export default observer(Comment);
