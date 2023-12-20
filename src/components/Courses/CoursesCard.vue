<script setup>
defineProps([
  "img",
  "duration_in_weeks",
  "difficulty_level",
  "author",
  "title",
  "description",
]);
</script>

<template>
  <div class="bg-white rounded-lg p-6 md:px-7 grid">
    <img :src="img" alt="img" class="h-auto w-auto object-cover" />
    <div class="flex items-center py-2 flex-wrap gap-2">
      <div>
        <span class="border border-white-95 rounded-md text-xs px-2 py-1 mr-2">
          {{ duration_in_weeks }} Weeks
        </span>
        <span class="border border-white-95 rounded-md px-2 py-1 text-xs">
          {{ difficulty_level }}
        </span>
      </div>
      <span class="lg:ml-auto">By {{ author }}</span>
    </div>
    <h2 class="text-gray-20 font-semibold text-base mb-4">
      {{ title }}
    </h2>
    <p class="text-gray-30 text-xs">
      {{ description }}
    </p>
    <div class="flex items-end mt-4">
      <a href="#" class="px-4 py-2 rounded-md flex-grow bg-white-97 text-gray-15 border text-center border-white-95 hover:bg-opacity-75 transition-all duration-500 ease-in-out hover:bg-white-90">Get it Now</a>
    </div>
  </div>
</template>
