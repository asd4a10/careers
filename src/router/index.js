import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompaniesView from "@/views/CompaniesView.vue";
import JobPostsView from "@/views/JobPostsView.vue";
import ForumView from "@/views/ForumView.vue";
import AuthView from "@/views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/careers",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/companies",
      name: "companies",
      component: CompaniesView,
    },
    {
      path: "/job-posts",
      name: "job-posts",
      component: JobPostsView,
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
  ],
});

export default router;
