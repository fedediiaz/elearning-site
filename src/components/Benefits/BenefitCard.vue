<script setup>
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid";
defineProps(["title", "text", "number"]);

function twoPlaces(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
}
</script>

<template>
  <div class="bg-white rounded-lg p-6 md:px-7 grid">
    <h1 class="text-gray-15 font-bold md:text-5xl text-4xl mb-4 text-right">
      {{ twoPlaces(number || 0) }}
    </h1>
    <h2 class="text-gray-20 font-semibold text-base mb-4">
      {{ title }}
    </h2>
    <p class="text-gray-30 text-xs">
      {{ text }}
    </p>
    <div class="flex items-end w-full mt-2">
      <div
        class="p-3 border border-white-95 bg-white-99 rounded-md ml-auto w-fit cursor-pointer hover:bg-white-95 transition-all duration-500 ease-in-out"
      >
        <ArrowUpRightIcon class="text-right w-4 text-orange-50" />
      </div>
    </div>
  </div>
</template>
