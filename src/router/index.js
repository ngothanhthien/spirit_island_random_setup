import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Spirit Island random',
      component: import('../view/SpiritIsland.vue'),
    },{
      path:'/crawl',
      component: import('../view/CrawlData.vue'),
    }
  ]
})

export default router
