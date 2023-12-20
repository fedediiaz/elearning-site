<template>
  <picture>
    <source media="(max-width: 600px)" srcset="@/assets/logos/logo-sm.svg" />
    <source
      media="(min-width: 601px) and (max-width: 1024px)"
      srcset="@/assets/logos/logo-md.svg"
    />
    <source media="(min-width: 1025px)" srcset="@/assets/logos/logo-lg.svg" />
    <img src="@/assets/logos/logo-md.svg" alt="Fallback SVG" />
  </picture>
</template>
