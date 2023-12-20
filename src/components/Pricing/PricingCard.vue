<script setup>
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/solid";
defineProps([
"plan_name",
"cost",
"features",
"time"
]);
</script>

<template>
  <div class="rounded-md border border-white-95 bg-white-99 px-3 py-5">
    <div class="text-center p-2 bg-orange-97 border border-orange-90 rounded-md mb-4">{{ plan_name }}</div>
    <div class="text-center mb-5">
      <span class="font-semibold text-4xl mr-1">${{ cost }}</span><span class="text-xs">/{{ time }}</span>
    </div>
    <div class="rounded-lg overflow-hidden">
      <div class="p-6 md:p-7 bg-white">
        <h2 class="text-center text-gray-15 font-semibold mb-5">Available Features</h2>
        <div class="border border-white-95 rounded-md p-2 flex gap-2 mb-4 items-center" v-for="(feature, index) in features" :key="index">
          <CheckIcon v-if="feature.has_access" class="rounded-sm bg-orange-90 p-0.5 w-5 h-5 text-gray-15" />
          <XMarkIcon v-else class="rounded-sm p-0.5 w-5 h-5 text-gray-15 border border-white-95" />
          <p>{{ feature.title }}</p>
        </div>
      </div>
      <div class="bg-orange-50 flex">
        <a href="#" class="px-4 py-3 flex-grow text-gray-15 text-center transition-all duration-500 ease-in-out hover:bg-orange-70">Get Started</a>
      </div>
    </div>
  </div>
</template>
