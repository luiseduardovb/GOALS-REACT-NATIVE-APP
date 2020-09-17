import { decorate, observable } from "mobx";
import instance from "./instance";

class GoalStore {
  goals = [];
  loading = true;

  fetchGoals = async () => {
    try {
      const response = await instance.get("/goals");
      this.goals = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error", error);
    }
  };
  createGoal = async (newGoal) => {
    try {
      const formData = new FormData();
      for (const key in newGoal) formData.append(key, newGoal[key]);
      const res = await instance.post("/goals", formData);
      this.goals.push(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
}

decorate(GoalStore, {
  goals: observable,
  loading: observable,
});

const goalStore = new GoalStore();
goalStore.fetchGoals();
export default goalStore;
