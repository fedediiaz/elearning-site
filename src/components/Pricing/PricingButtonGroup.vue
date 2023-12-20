<script setup>
import { ref } from "vue";

const emit = defineEmits(["onSelectionChanged"]);
let selected = ref("monthly");

function onButtonPressed(name) {
  selected.value = name;
  emit("onSelectionChanged", name);
}
</script>

<template>
  <div class="p-2 inline-flex bg-white rounded-md">
    <button
      class="button"
      :class="{ selected: selected === 'monthly' }"
      @click="onButtonPressed('monthly')"
    >
      Monthly
    </button>
    <button
      class="button"
      :class="{ selected: selected === 'yearly' }"
      @click="onButtonPressed('yearly')"
    >
      Yearly
    </button>
  </div>
</template>

<style scoped>
.selected {
  @apply bg-orange-50;
  @apply text-white;
}

.button {
  @apply text-xs;
  @apply px-4;
  @apply py-2;
  @apply rounded;
}
</style>
