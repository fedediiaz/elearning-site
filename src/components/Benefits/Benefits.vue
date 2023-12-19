<script setup>
import BenefitCard from "./BenefitCard.vue";
import { ref } from "vue";
const cards = ref([
  {
    number: 1,
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    number: 2,
    title: "Expert Instruction",
    text: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    number: 3,
    title: "Diverse Course Offerings",
    text: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    number: 4,
    title: "Updated Curriculum",
    text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    number: 5,
    title: "Practical Projects and Assignments",
    text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    number: 1,
    title: "Interactive Learning Environment",
    text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
]);
</script>

<template>
  <section class="max-w-4xl mx-auto mt-11">
    <h1 class="text-lg font-semibold mb-2">Benefits</h1>
    <div class="md:flex justify-between gap-5 items-center">
      <p class="mb-5 md:mb-0 md:pr-5">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <a
        href="#"
        class="px-4 py-2 flex-shrink-0 rounded-md bg-white text-text hover:bg-opacity-75 transition-all duration-500 ease-in-out"
      >
        View All
      </a>
    </div>
    <div class="py-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <BenefitCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :text="card.text"
        :number="card.number"
      />
    </div>
  </section>
</template>

<style scoped></style>
