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
  <header class="max-w-4xl mx-auto">
    <nav class="navbar">
      <div class="logo-container">
        <img src="../assets/logo.svg" alt="logo" class="logo" />
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li
          class="nav-item"
          :class="{ active: index == 0 }"
          v-for="(item, index) in nav_links"
          :key="index"
          @click="isMenuOpen.value = false"
        >
          <a :href="item.link" class="nav-link">{{ item.name }}</a>
        </li>
      </ul>
      <div class="nav-actions">
        <a href="#" class="">Sign Up</a>
        <a href="#" class="px-4 py-2 rounded-md bg-orange-50 text-white hover:bg-opacity-75 transition-all duration-500 ease-in-out">Login</a>
        <div
          class="hamburger"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  @apply border-b;
  @apply border-white-95;
  @apply pb-2;
}


.logo-container {
  /* @apply flex;
  @apply items-center;
  @apply justify-center; */
  @apply bg-orange-50;
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
  gap: 20px;
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
  @apply text-orange-50;
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
  @apply bg-white-95;
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
