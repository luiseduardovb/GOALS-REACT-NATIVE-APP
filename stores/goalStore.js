import { decorate, observable } from "mobx";
import categoryStore from "./categoryStore";
import instance from "./instance";
import profileStore from "./profileStore";

class GoalStore {
  goals = [];
  followedGoals = [];
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
  fetchFollowedGoals = async () => {
    try {
      const response = await instance.get("/goals");
      this.goals = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error", error);
    }
  };

  createGoal = async (newGoal, profile) => {
    // console.log("GoalStore -> createGoal -> profile", profile[0].Progress);
    try {
      const res = await instance.post("/goals", newGoal);
      categoryStore.categories.push(newGoal.category);
      const goal = res.data;
      this.goals.push(goal);
      profile.goal.push(goal);
      // progress.goal.push({ goalId: goal.id });
    } catch (error) {
      console.log("Create goal error", error);
    }
  };

  updateGoal = async (updatedGoal) => {
    try {
      // const formData = new FormData();
      // for (const key in updatedGoal) formData.append(key, updatedGoal[key]);
      await instance.put(`/goals/${updatedGoal.id}`, updatedGoal);
      const goal = this.goals.find((goal) => goal.id === updatedGoal.id);
      for (const key in updatedGoal) goal[key] = updatedGoal[key];
    } catch (error) {
      console.log("Update goal error:", error);
    }
  };

  followGoal = async (goal) => {
    try {
      await instance.post(`/goals/${goal.id}`);
    } catch (error) {
      console.log("followGoal -> error", error);
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
