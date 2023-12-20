<script setup>
import Banner from "./components/Banner/Banner.vue";
import Header from "./components/Header/Header.vue";
import Hero from "./components/Hero/Hero.vue";
import Benefits from "./components/Benefits/Benefits.vue";
import Courses from "./components/Courses/Courses.vue";
import Testimonials from "./components/Testimonials/Testimonials.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div class="px-4 pt-3">
    <Banner />
    <Header />
    <Hero />
    <img
      src="./assets/media-player.png"
      alt=""
      class="mt-11 max-w-4xl mx-auto w-full"
    />
    <Benefits />
    <Courses />
    <Testimonials />
    <Pricing />
  </div>
  <Footer />
</template>

<style scoped></style>
