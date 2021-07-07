import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Detail from "../views/Detail.vue";

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
    },
    {
        path: "/create",
        name: "create",
        component: Create,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: Edit,
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: Detail,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
