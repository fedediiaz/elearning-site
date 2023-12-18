<script setup>
import { ref } from "vue";

let isMenuOpen = ref(false);

const nav_links = [
  {
    link: "#",
    name: "Home",
  },
  {
    link: "#",
    name: "Courses",
  },
  {
    link: "#",
    name: "About Us",
  },
  {
    link: "#",
    name: "Pricing",
  },
  {
    link: "#",
    name: "Contact",
  },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header>
    <div>
      <a href="#" class="banner">
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <img src="./assets/icon_arrow_right.svg" alt="right_arrow" />
      </a>
    </div>

    <nav class="navbar">
      <div class="logo-container">
        <img src="./assets/logo.svg" alt="logo" class="logo" />
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li class="nav-item" :class="{ active: index == 0 }" v-for="(item, index) in nav_links" :key="index"
          @click="isMenuOpen.value = false">
          <a :href="item.link" class="nav-link">{{ item.name }}</a>
        </li>
      </ul>
      <div class="nav-actions">
        <a href="#" class="px-5 py-2 rounded-md">Sign Up</a>
        <a href="#" class="px-6 py-2 rounded-md bg-orange text-white">Login</a>
        <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- <div class="nav-container">
      <div class="logo-container">
        <img src="./assets/logo.svg" alt="logo">
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About Us</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
      <div class="ml-auto">
        <a href="#">Sign Up</a>
        <a href="#">Login</a>
      </div>
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div> -->
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.banner {
  @apply bg-orange;
  @apply px-4;
  @apply py-2;
  @apply text-white;
  @apply flex;
  @apply gap-2;
  @apply rounded-md;
  @apply items-center;
  @apply justify-center;
  @apply transition-all;
  @apply duration-500;
  @apply ease-in-out;
}

.banner:hover {
  @apply bg-opacity-75;
}

.logo-container {
  /* @apply flex;
  @apply items-center;
  @apply justify-center; */
  @apply bg-orange;
  @apply rounded-md;
  width: 40px;
  height: 40px;
  padding: 4px;
}

.logo {
  width: 40px;
  height: auto;
}

.navbar {
  display: flex;
  flex-grow: 0;
  align-items: center;
  margin-top: 8px;
}

.nav-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: fit-content;
}

nav li {
  list-style: none;
}

nav a {
  text-decoration: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
  border-radius: 4px;
}

.nav-link:hover {
  @apply text-orange;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #482ff7;
}

.nav-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  left: -100%;
  gap: 24px;
  top: 0;
  background-color: #fff;
  width: 100%;
  padding: 0 16px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
}

.nav-menu.active {
  left: 0;
}

.nav-item {
  @apply rounded-md;
  @apply px-4;
  @apply py-2;
  @apply bg-opacity-50;
}

.nav-item.active {
  @apply bg-light-gray;
}

.hamburger {
  display: block;
  cursor: pointer;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .nav-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    left: 0;
    gap: 8px;
    flex-grow: 0;
    background-color: transparent;
    box-shadow: none;
    transition: none;
  }

  .logo-container {
    width: auto;
    height: auto;
  }
}
</style>
