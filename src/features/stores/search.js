import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    state() {
        return {
            keyword: "",
        }
    },
    actions: {
        changeKeyword(keys) {
            this.keyword = keys
        },
    }
})

