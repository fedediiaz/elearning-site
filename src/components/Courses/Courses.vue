<script setup>
import { ref } from "vue";
import CoursesCard from "./CoursesCard.vue";
import image1 from "@/assets/our_courses/Imagecourses-1.png";
import image2 from "@/assets/our_courses/Imagecourses-2.png";
import image3 from "@/assets/our_courses/Imagecourses-3.png";
import image4 from "@/assets/our_courses/Imagecourses-4.png";
import image5 from "@/assets/our_courses/Imagecourses-5.png";
import image0 from "@/assets/our_courses/Imagecourses.png";

const cards = ref([
  {
    img: image0,
    duration_in_weeks: 4,
    difficulty_level: "Beginner",
    author: "John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    img: image1,
    duration_in_weeks: 6,
    difficulty_level: "Intermediate",
    author: "Emily Johnson",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    img: image2,
    duration_in_weeks: 8,
    difficulty_level: "Intermediate",
    author: "David Brown",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    img: image3,
    duration_in_weeks: 10,
    difficulty_level: "Beginner",
    author: "Sarah Thompson",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  },
  {
    img: image4,
    duration_in_weeks: 10,
    difficulty_level: "Intermediate",
    author: "Michael Adams",
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
  {
    img: image5,
    duration_in_weeks: 6,
    difficulty_level: "Advance",
    author: "Jennifer Wilson",
    title: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
  },
]);
</script>

<template>
  <section class="max-w-4xl mx-auto mt-11">
    <h1 class="text-lg font-semibold mb-2">Our Courses</h1>
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
    <div class="py-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      <CoursesCard
        v-for="(card, index) in cards"
        :key="index"
        :img="card.img"
        :duration_in_weeks="card.duration_in_weeks"
        :difficulty_level="card.difficulty_level"
        :author="card.author"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </section>
</template>

<style scoped></style>
