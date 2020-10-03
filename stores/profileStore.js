import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ProfileStore {
  profiles = [];
  loading = true;
  // userProfile = null;

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profile");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error", error);
    }
  };
  // findProfile = async () => {
  // console.log("ProfileStore -> user", user);
  //   try {
  // console.log("ProfileStore -> findProfile -> profiles", this.profiles);
  //     const userId = authStore.user.id;
  // const profileIndex = this.profiles.findIndex((profile) => userId === 3);
  // console.log("ProfileStore -> findProfile -> profileIndex", profileIndex);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
}

decorate(ProfileStore, {
  profiles: observable,
  loading: observable,
  // userProfile: observable,
});

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
