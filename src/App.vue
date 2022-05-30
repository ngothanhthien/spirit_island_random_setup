<script setup>
import { ref } from "vue";
const adversaries = [
  "Brandenburg-Prussia",
  "England",
  "Sweden",
  "France (Plantation Colony)",
  "Habsburg Monarchy (Livestock Colony)",
  "Russia",
  "Scotland",
];
const maps = ["A", "B", "C", "D", "E", "F"];
const spirits = [
  "Lightning's Swift Strike",
  "River Surges in Sunlight",
  "Vital Strength of the Earth",
  "Shadows Flicker Like Flame",
  "Thunderspeaker",
  "A Spread of Rampant Green",
  "Ocean's Hungry Grasp",
  "Bringer of Dreams and Nightmares",
  "Sharp Fangs Behind the Leaves",
  "Keeper of the Forbidden Wilds",
  "Heart of the Wildfire",
  "Serpent Slumbering Beneath the Island",
  "Stone's Unyielding Defiance",
  "Shifting Memory of Ages",
  "Grinning Trickster Stirs Up Trouble",
  "Lure of the Deep Wilderness",
  "Many Minds Move as One",
  "Volcano Looming High",
  "Shroud of Silent Mist",
  "Vengeance as a Burning Plague",
  "Starlight Seeks Its Form",
  "Fractured Days Split the Sky",
  "Downpour Drenches the World",
  "Finder of Paths Unseen",
];
const mapGen = ref([]);
const spiritGen = ref([]);
const adversaryGen = ref("");
const genRandom = (numSpirit) => {
  const mapRandom = new Map();
  const spiritRandom = new Map();
  for (let i = 0; i < numSpirit; i++) {
    while (true) {
      const spirit = getRandomObject(spirits);
      if (!spiritRandom.has(spirit)) {
        spiritRandom.set(spirit, i);
        break;
      }
    }
    while (true) {
      const map = getRandomObject(maps);
      if (!mapRandom.has(map)) {
        if (
          numSpirit < 4 &&
          ((map == "F" && mapRandom.has("D")) ||
            (map == "D" && mapRandom.has("F")) ||
            (map == "B" && mapRandom.has("E")) ||
            (map == "E" && mapRandom.has("B")))
        ) {
          continue;
        }
        if(numSpirit ==4&&(map=="F"||map=="E")){
          continue;
        }
        mapRandom.set(map, i);
        break;
      }
    }
  }
  mapGen.value = mapRandom.keys();
  spiritGen.value = spiritRandom.keys();
  adversaryGen.value = getRandomObject(adversaries);
};
const getRandomObject = (objects) =>
  objects[parseInt(Math.random() * 1000) % objects.length];
</script>

<template>
  <div class="flex h-screen">
    <div class="border-4 w-1/3 m-auto p-4 self-center">
      <select
        class="block text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="animals"
        @change="genRandom($event.target.value)"
      >
        <option value="">Số spirit</option>
        <option value="1">1 spirit</option>
        <option value="2">2 spirit</option>
        <option value="3">3 spirit</option>
        <option value="4">4 spirit</option>
        <option value="5">5 spirit</option>
        <option value="6">6 spirit</option>
      </select>
      <div id="result">
        <div>Adversary: {{ adversaryGen }}</div>
        <div>
          Map: <span class="mx-1" v-for="map in mapGen">{{ map }}</span>
        </div>
        <div>Spirit:</div>
        <div class="px-4" v-for="spirit in spiritGen">{{ spirit }}</div>
      </div>
    </div>
  </div>
</template>
