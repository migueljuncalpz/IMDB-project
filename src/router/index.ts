import {createRouter,createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import LandPage from "@/views/LandPageView.vue";
import FilmDeck from "@/views/SelectionView.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LandPage',
        component: LandPage
    },
    {
        path: '/cardDeck',
        name: 'CardDeck',
        component: FilmDeck
    }
]
const router= createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)
export default router