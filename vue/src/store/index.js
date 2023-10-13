import { defineStore } from "pinia";

export const storeMain = defineStore({
    id: 'storeMain',
    state: () => ({
        user: 'user1',
        token: null
    }),
    getters: {},
    actions: {},

})
