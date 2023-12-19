<template>
  <section class="pt-16">
    <div class="header-box">
      <img
        src="../assets/abstract_line_icon.svg"
        alt=""
        class="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 w-7 h-auto"
      />
      <div class="bolt-container rounded-md p-2">
        <img src="../assets/icon_bolt.svg" alt="bolt" />
      </div>
      <h1 class="mx-2 text-sm md:text-2xl font-semibold">
        <span class="text-orange-50 font-semibold">Unlock</span> Your Creative
        Potential
      </h1>
    </div>
    <h2 class="text-lg text-center font-semibold mb-1">
      with Online Design and Development Courses.
    </h2>
    <p class="text-center">
      Learn from Industry Experts and Enhance Your Skills.
    </p>
    <div class="flex items-center justify-center gap-3 mt-10">
      <a
        href="#"
        class="px-4 py-2 rounded-md bg-orange-50 text-white hover:bg-opacity-75 transition-all duration-500 ease-in-out"
      >
        Explore Courses
      </a>
      <a
        href="#"
        class="px-4 py-2 rounded-md bg-white text-text hover:bg-opacity-75 transition-all duration-500 ease-in-out"
      >
        View Pricing
      </a>
    </div>
    <div class="logos-container">
      <img class="logos-img" src="../assets/logo-amazon.svg" alt="amazon" />
      <img class="logos-img" src="../assets/logo-netflix.svg" alt="netflix" />
      <img class="logos-img" src="../assets/logo-spotify.svg" alt="spotify" />
      <img class="logos-img" src="../assets/logo-zoom.svg" alt="zoom" />
      <img class="logos-img" src="../assets/logo-zapier.svg" alt="zapier" />
      <img class="logos-img" src="../assets/logo-notion.svg" alt="notion" />
      <img class="logos-img" src="../assets/logo-adobe.svg" alt="adobe" />
    </div>
  </section>
</template>

<style scoped>
.logos-container {
  @apply relative;
  @apply bg-white-99;
  @apply border-white-95;
  @apply border;
  @apply rounded-md;
  @apply flex;
  @apply justify-start;
  @apply overflow-x-scroll;
  @apply p-3;
  @apply w-full;
  @apply max-w-fit;
  @apply mx-auto;
  @apply h-auto;
  @apply mt-12;
}

.logos-img {
  @apply border-r;
  @apply border-white-95;
  @apply px-6;
  @apply py-2;
}

.logos-img:last-of-type {
  @apply border-0;
}

.header-box {
  @apply flex;
  @apply items-center;
  @apply justify-start;
  @apply bg-white-99;
  @apply rounded-md;
  @apply p-2;
  @apply border;
  @apply border-white-95;
  @apply relative;
  @apply mb-3;
  @apply max-w-fit;
  @apply mx-auto;
}

.bolt-container {
  background-color: #fff4e5;
}

@screen lg {
  .logos-container {
    @apply justify-center;
    @apply p-4;
  }

  .header-box {
    @apply px-5;
    @apply px-3;
  }
}
</style>
