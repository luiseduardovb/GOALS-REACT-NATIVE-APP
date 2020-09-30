import { decorate, observable } from "mobx";
import instance from "./instance";

class CommentStore {
  comments = [];
  loading = true;

  fetchComments = async () => {
    try {
      const res = await instance.get("/comments");
      this.comments = res.data;
      this.loading = false;
    } catch (error) {
      console.log("FetchCOmment error", error);
    }
  };

  createComment = async (newComment) => {
    try {
      const res = await instance.post(
        `/goals/${newComment.goalId}/comments`,
        newComment
      );
      this.comments.push(res.data);
    } catch (error) {
      console.log("Comment creation error", error);
    }
  };

  updateComment = async (updatedComment) => {
    try {
      await instance.put(`/comments/${updatedComment.id}`, updatedComment);
      const goal = this.comments.find((goal) => goal.id === updatedComment.id);
      for (const key in updatedComment) goal[key] = updatedComment[key];
    } catch (error) {
      console.log("error:", error);
    }
  };

  deleteComment = async (CommentId) => {
    try {
      await instance.delete(`/comments/${CommentId}`);
      this.comments = this.comments.filter((goal) => goal.id !== CommentId);
    } catch (error) {
      console.log("error:", error);
    }
  };
}

decorate(CommentStore, {
  comments: observable,
  loading: observable,
});

const commentStore = new CommentStore();
commentStore.fetchComments();
export default commentStore;
