<script setup>
import { reactive, watch } from "vue";
const crawl = reactive({
  link: "",
  error: false,
  result: "",
});
const regex = /(?<=boardgamegeek\.com\/boardgame\/)[0-9]*/;
watch(
  () => crawl.link,
  (link) => {
    const result = link.match(regex);
    if (result && link !== "") {
      crawl.error = false;
      crawl.result = result[0];
    } else if (link === "") {
      crawl.error = false;
      crawl.result = "";
    } else {
      crawl.error = true;
      crawl.result = "";
    }
  }
);
watch(
  () => crawl.result,
  async (result) => {
    if (result !== "") { 
        const params={
          game_id: result,
        };
        const options = {
          method: "POST",
          body: JSON.stringify(params)
        }
        const response=await fetch('http://localhost:8080/crawl_geek.php',options);
        const comment=await response.json();
        console.log(comment);
    }
  }
);
</script>
<template>
  <div class="w-full md:w-1/2 lg:w-1/3 mt-2 m-auto">
    <input
      v-model.trim="crawl.link"
      class="mb-1 rounded-lg border-transparent appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder="Link game..."
    />
    <div v-if="crawl.link === ''" class="text-gray-400 text-sm">
      VD: https://boardgamegeek.com/boardgame/162886/spirit-island
    </div>
    <div v-if="crawl.error" class="text-red-400">Link không hợp lệ</div>
  </div>
</template>
