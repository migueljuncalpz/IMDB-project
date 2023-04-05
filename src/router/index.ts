import {createRouter,createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import LandPage from "@/views/LandPageView.vue";
import Selection from "@/views/SelectionView.vue";
import ResultsView from "@/views/ResultsView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LandPage',
        component: LandPage
    },
    {
        path: '/selection/:typeResults',
        name: 'selection',
        component: Selection,
    },
    {
        path: '/results',
        name: 'Results',
        component: ResultsView
    },
]
const router= createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)
export default router