import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/AddCurrency.vue";

const routes = [{
        path: "/",
        name: "Add currency",
        component: Home,
    },
    {
        path: "/currencyconverter",
        name: "currency converter",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/CurrencyConverter.vue"),
    },
    {
        path: "/currencytable",
        name: "currency table",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/CurrencyTable.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;