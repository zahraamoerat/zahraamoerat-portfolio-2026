// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import PortfolioView from "@/views/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
