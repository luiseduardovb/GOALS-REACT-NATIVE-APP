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

  updateGoal = async (updatedOne) => {
    try {
      const formData = new FormData();
      for (const key in updatedOne) formData.append(key, updatedOne[key]);
      await instance.put(`/goals/${updatedOne.id}`, formData);
      const goal = this.goals.find((goal) => goal.id === updatedOne.id);
      for (const key in updatedOne) goal[key] = updatedOne[key];
    } catch (error) {
      console.log("error:", error);
    }
  };

  deleteGoal = async (GoalId) => {
    try {
      await instance.delete(`/goals/${GoalId}`);
      this.goals = this.goals.filter((goal) => goal.id !== GoalId);
    } catch (error) {
      console.log("error:", error);
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
