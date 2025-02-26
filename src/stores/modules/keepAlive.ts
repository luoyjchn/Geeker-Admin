import { defineStore } from "pinia";
import { KeepAliveState } from "@/stores/interface";
import { getStoreId } from "@/stores/utils";

/**
 * keepAlive store id
 */
const KEEPALIVE_STORE_ID = getStoreId("keepAlive");

export const useKeepAliveStore = defineStore({
  id: KEEPALIVE_STORE_ID,
  state: (): KeepAliveState => ({
    keepAliveName: []
  }),
  actions: {
    // Add KeepAliveName
    async addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    // Remove KeepAliveName
    async removeKeepAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter(item => item !== name);
    },
    // Set KeepAliveName
    async setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName;
    }
  }
});
