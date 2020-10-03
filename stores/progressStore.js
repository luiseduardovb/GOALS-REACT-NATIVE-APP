import { decorate, observable } from "mobx";
import instance from "./instance";

class ProgressStores {
  goalProgresses = [];
  progresses = [];
  loading = true;

  fetchGoalProgresses = async (goalId) => {
    try {
      const response = await instance.get(`/progress/goal/${goalId}`);
      // console.log(
      //   "ProgressStores -> fetchGoalProgresses -> response",
      //   response
      // );

      this.goalProgresses = response.data;
      this.loading = false;
      // console.log(
      //   "ProgressStores -> fetchGoalProgresses -> goalProgresses",
      //   goalProgresses
      // );
    } catch (error) {
      console.log("Goal Progresses Error", error);
    }
  };

  fetchProgresses = async () => {
    try {
      const response = await instance.get("/progress");
      this.progresses = response.data;
      this.loading = false;
    } catch (error) {
      console.log("HIII", error);
    }
  };

  updateProgress = async (newProgress) => {
    try {
      await instance.put(`/progress/${newProgress.goalId}`, newProgress);
      const foundProgress = this.progresses.find(
        (progress) => progress.goalId === newProgress.goalId
      );
      foundProgress.targetProgress = newProgress.targetProgress;
    } catch (error) {
      console.log("ProgressStores -> updateProgress -> error", error);
    }
  };

  unfollowGoal = async (goalId) => {
    try {
      await instance.delete(`/goals/${goalId}`);
      this.progresses = this.progresses.filter(
        (progress) => progress.goalId !== +goalId
      );
      console.log(
        "GoalStore -> deleteGoal -> this.progresses ",
        this.progresses
      );
    } catch (error) {
      console.log("Unfollow goal error:", error);
    }
  };
}

decorate(ProgressStores, {
  progresses: observable,
  followedGoals: observable,
  loading: observable,
  goalProgresses: observable,
});

const progressStore = new ProgressStores();
progressStore.fetchProgresses();
export default progressStore;
