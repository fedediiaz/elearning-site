<script setup>
defineProps([
"author_avatar",
"author_name",
"description",
]);
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <div class="bg-white p-6 md:p-7">
      <p class="text-gray-30 text-xs">
        {{ description }}
      </p>
    </div>
    <div class="bg-white-99 flex justify-between px-6 py-3 md:px-7">
      <div class="flex items-center gap-2">
        <img :src="author_avatar" :alt="author_name" class="w-8">
        <span>{{ author_name }}</span>
      </div>
      <a href="#" class="px-4 py-2 rounded-md bg-white-97 text-gray-15 border text-center border-white-95 hover:bg-opacity-75 transition-all duration-500 ease-in-out hover:bg-white-90">Read Full Story</a>
    </div>
  </div>
</template>
