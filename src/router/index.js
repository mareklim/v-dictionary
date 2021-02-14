import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AddWords from "@/views/AddWords.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/words/add",
    name: "AddWords",
    component: AddWords,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
