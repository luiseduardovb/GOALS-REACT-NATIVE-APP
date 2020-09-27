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

  updateGoal = async (updatedGoal) => {
    try {
      const formData = new FormData();
      for (const key in updatedGoal) formData.append(key, updatedGoal[key]);
      await instance.put(`/goals/${updatedGoal.id}`, formData);
      const goal = this.goals.find((goal) => goal.id === updatedGoal.id);
      for (const key in updatedGoal) goal[key] = updatedGoal[key];
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

//Follow a goal
followGoal = async (goalId) => {
  try {
    await instance.post(`/goals/${goalId}`);
  } catch (error) {
    console.log("error follow goal:", error);
  }
};

decorate(GoalStore, {
  goals: observable,
  loading: observable,
});

const goalStore = new GoalStore();
goalStore.fetchGoals();
export default goalStore;
