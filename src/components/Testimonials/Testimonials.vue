<script setup>
import { ref } from "vue";
import TestimonialsCard from "./TestimonialsCard.vue";
import image1 from "@/assets/testimonials/Imageppl-1.png";
import image2 from "@/assets/testimonials/Imageppl-2.png";
import image3 from "@/assets/testimonials/Imageppl-3.png";
import image0 from "@/assets/testimonials/Imageppl.png";

const cards = ref([
  {
    author_avatar: image0,
    author_name: "Sarah L",
    description: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
  },
  {
    author_avatar: image1,
    author_name: "Jason M",
    description: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
  },
  {
    author_avatar: image2,
    author_name: "Emily R",
    description:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
  },
  {
    author_avatar: image3,
    author_name: "Michael K",
    description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
  }
]);
</script>

<template>
  <section class="max-w-4xl mx-auto mt-11">
    <h1 class="text-lg font-semibold mb-2">Our Testimonials</h1>
    <div class="md:flex justify-between gap-5 items-center">
      <p class="mb-5 md:mb-0 md:pr-5">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
      </p>
      <a
        href="#"
        class="px-4 py-2 flex-shrink-0 rounded-md bg-white text-text hover:bg-opacity-75 transition-all duration-500 ease-in-out hover:bg-white-90"
      >
        View All
      </a>
    </div>
    <div class="py-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      <TestimonialsCard
        v-for="(card, index) in cards"
        :key="index"
        :author_avatar="card.author_avatar"
        :author_name="card.author_name"
        :description="card.description"
      />
    </div>
  </section>
</template>

<style scoped></style>
