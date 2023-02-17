import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const nameAndEmailStore = defineStore("user",{
    state: () => ({
        name: "",
        email: ""
    })
});