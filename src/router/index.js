import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Spirit Island random',
      component:()=> import('../view/SpiritIsland.vue'),
    },{
      path:'/crawl',
      name:'Crawl Data',
      component:()=> import('../view/CrawlData.vue'),
    }
  ]
})

export default router
