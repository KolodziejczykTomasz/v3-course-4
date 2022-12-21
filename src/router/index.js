import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from "@/views/ViewNotes.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "note",
      component: ViewNotes,
    },
    {
      path: "/editNote/:id",
      name: "editNote",
      component: ViewEditNote,
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("../views/ViewStats.vue"),
    },
  ],
});

export default router