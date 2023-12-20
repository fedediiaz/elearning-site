<script setup>
import Logo from "@/components/Header/Logo.vue";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <footer class="bg-white mt-4 pt-10">
    <div class="max-w-4xl mx-auto px-4">
      <div class="pb-4 lg:flex justify-around gap-12">
        <div class="flex-grow">
          <Logo class="" />
          <div class="flex items-center gap-2 mt-5">
            <EnvelopeIcon class="w-4 h-4" />
            <a
              class="text-sm font-light transition-all duration-500 hover:text-orange-50"
              href="mailto:contact@skillbridge.com"
              >contact@skillbridge.com</a
            >
          </div>
          <div class="flex items-center gap-2 mt-2">
            <PhoneIcon class="w-4 h-4" />
            <a
              class="text-sm font-light transition-all duration-500 hover:text-orange-50"
              href="tel:+31615888999"
              >+31 615 888 999</a
            >
          </div>
          <div class="flex items-center gap-2 mt-2">
            <MapPinIcon class="w-4 h-4" />
            <a
              class="text-sm font-light transition-all duration-500 hover:text-orange-50"
              href="https://www.google.com/maps/"
              >Netherlands</a
            >
          </div>
        </div>
        <div class="flex gap-10 mt-3">
          <div>
            <h2 class="text-base mb-2">Home</h2>
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Benefits</a
            >
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Our Courses</a
            >
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Our Testimonials</a
            >
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Our FAQ</a
            >
          </div>
          <div>
            <h2 class="text-base mb-2">About Us</h2>
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Company</a
            >
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Achievements</a
            >
            <a
              class="block text-xs font-light transition-all duration-500 hover:text-orange-50"
              href="#"
              >Our Goals</a
            >
          </div>
        </div>
        <div class="mt-3">
          <h2 class="text-base mb-2">Social Profiles</h2>
          <span
            class="inline-flex p-2 bg-white-97 border border-white-95 rounded-md mr-2"
          >
            <img src="@/assets/social/facebook.png" alt="facebook" />
          </span>
          <span
            class="inline-flex p-2 bg-white-97 border border-white-95 rounded-md mr-2"
          >
            <img src="@/assets/social/twitter.png" alt="twitter" />
          </span>
          <span
            class="inline-flex p-2 bg-white-97 border border-white-95 rounded-md"
          >
            <img src="@/assets/social/linkedin.png" alt="linkedin" />
          </span>
        </div>
      </div>
      <div class="p-4 border-t border-white-95">
        <p class="font-light text-center">© 2023 Skillbridge & Federico Diaz.</p>
      </div>
    </div>
  </footer>
</template>
