import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// const calcApp = createApp({
//     data() {
//         return {
//             calculations: [],
//         }
//     },
//     methods: {
//         addCalculation(){
//             this.calculations.push(this.newCalculation);
//             console.log(this.item);
//             this.newCalculation = "";
//         }
//     }
// });
// calcApp.mount("#calculatorContainer");