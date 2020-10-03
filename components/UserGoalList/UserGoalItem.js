import React from "react";
import { observer } from "mobx-react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

//Components
import ProgressBar from "../ProgressBar";

// Styles

import { ListWrapperView, StyledRow, StyledProgressView } from "./styles";

//Store
import progressStore from "../../stores/progressStore";

const UserGoalItem = ({ goal }) => {
  // console.log("UserGoalItem -> goal", goal);
  const navigation = useNavigation();
  return (
    <ListWrapperView>
      <StyledRow
        style={{ paddingHorizontal: 2, paddingVertical: 5 }}
        onPress={() => navigation.navigate("Goal Detail", { goal: goal })}
      >
        {goal.name}
      </StyledRow>
      <StyledRow style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
        {moment(goal.createdAt).format("MMM Do YY")}
      </StyledRow>
      <StyledProgressView>
        <ProgressBar navigation={navigation} goal={goal} />
      </StyledProgressView>
    </ListWrapperView>
  );
};

export default observer(UserGoalItem);
