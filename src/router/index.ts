import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatchlistView from '../views/WatchlistView.vue'
import DevNoteView from '../views/DevNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/watchlist', component: WatchlistView },
    { path: '/dev-note', component: DevNoteView }
  ]
})

export default router
