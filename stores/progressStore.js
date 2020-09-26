import { decorate, observable } from "mobx";
import instance from "./instance";

class ProgressStores {
  progresses = [];
  loading = true;

  fetchProgresses = async () => {
    try {
      const response = await instance.get("/progress");
      this.progresses = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error", error);
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
}

decorate(ProgressStores, {
  progresses: observable,
  followedGoals: observable,
  loading: observable,
});

const progressStore = new ProgressStores();
progressStore.fetchProgresses();
export default progressStore;
