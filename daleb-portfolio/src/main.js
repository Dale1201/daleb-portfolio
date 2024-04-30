import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const app = createApp(App);
app.component("base-button", BaseButton);
app.mount("#app");

