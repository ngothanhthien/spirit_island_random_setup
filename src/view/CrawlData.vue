<script setup>
import { reactive, watch, ref } from "vue";
import { delay } from "../logic/timer";
const crawl = reactive({
  link: "",
  error: false,
  result: "",
  final: [],
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
      console.log(1);
      const params = {
        game_id: result,
        page: 1,
      };
      while (true) {
        let response = await fetch("http://localhost:8000/php/crawl_geek.php", {
          method: "POST",
          body: JSON.stringify(params),
        });
        response = await response.json();
        if (response["errors"] != undefined) {
          console.log(response["errors"]);
          await delay(60000);
          continue;
        }
        if (response["items"].length == 0) {
          console.log('done');
          break;
        }
        for (let i = 0; i < response["items"].length; i++) {
          const user = response["items"][i]["user"];
          if (user["country"] == "Vietnam") {
            const rating = response["items"][i]["rating"];
            const comment = response["items"][i]["textfield"]["comment"];
            const res = {
              country: user["country"] == "" ? "Không rõ" : user["country"],
              name: user["username"],
              comment: comment["rendered"],
              rating: rating,
            };
            crawl.final.push(res);
          }
        }
        await delay(5000);
        params.page++;
        console.log(params.page);
      }
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
    <div>
      <div class="m-1 border inline-block" v-for="res in crawl.final">
        <div>{{ res.country }}</div>
        <a target="_blank" class="text-lime-500" :href="'https://boardgamegeek.com/user/'+res.name">{{
          res.name
        }}</a>
        <div>{{ res.comment }}</div>
        <div>{{ res.rating }}</div>
      </div>
    </div>
  </div>
</template>
