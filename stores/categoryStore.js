import { decorate, observable } from "mobx";
import instance from "./instance";

class Category {
  categories = [];
  loading = true;

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error", error);
    }
  };

  createCategory = async (newCategory) => {
    try {
      const res = await instance.post("/categories", newCategory);
      this.categories.push(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
}

decorate(Category, {
  categories: observable,
  loading: observable,
});

const categoryStore = new Category();
categoryStore.fetchCategories();
export default categoryStore;
