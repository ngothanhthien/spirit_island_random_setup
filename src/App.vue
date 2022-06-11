<template>
  <div id="app">
    <div
      class="text-sm text-center text-gray-400 border-b border-gray-200"
    >
      <div class="flex flex-wrap -mb-px justify-center">
        <div class="mr-2">
          <router-link
            :to="{path:'/'}"
            class="inline-block p-4 rounded-t-l"
            >Spirit Island</router-link
          >
        </div>
        <div class="mr-2">
          <router-link
            :to="{path:'/crawl'}"
            class="inline-block p-4 rounded-t-lg"
            aria-current="page"
            >Crawl Data</router-link
          >
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style>
.router-link-active{
  @apply text-blue-600 border-b-2 border-blue-600 font-medium
}
</style>
