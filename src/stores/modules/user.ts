import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";
import { getStoreId } from "@/stores/utils";

/**
 * tabs store id
 */
const USER_STORE_ID = getStoreId("user");

export const useUserStore = defineStore({
  id: USER_STORE_ID,
  state: (): UserState => ({
    token: "",
    userInfo: { name: "Geeker" }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig(USER_STORE_ID)
});
