<script setup>
import { ref } from "vue";
import PricingCard from "./PricingCard.vue";
import PricingButtonGroup from "./PricingButtonGroup.vue";

const cards = ref([
  {
    plan_name: "Free Plan",
    monthly_cost: 0,
    yearly_cost: 0,
    features: [
      { title: "Access to selected free courses.", has_access: true },
      { title: "Limited course materials and resources.", has_access: true },
      { title: "Basic community support.", has_access: true },
      { title: "No certification upon completion.", has_access: true },
      { title: "Ad-supported platform.", has_access: true },
      { title: "Access to exclusive Pro Plan community forums.", has_access: false },
      { title: "Early access to new courses and updates.", has_access: false },
    ]
  },
  {
    plan_name: "Pro Plan",
    monthly_cost: 79,
    yearly_cost: 79 * 11,
    features: [
      { title: "Unlimited access to all courses.", has_access: true },
      { title: "Unlimited course materials and resources.", has_access: true },
      { title: "Priority support from instructors.", has_access: true },
      { title: "Course completion certificates.", has_access: true },
      { title: "Add free experience.", has_access: true },
      { title: "Access to exclusive Pro Plan community forums.", has_access: true },
      { title: "Early access to new courses and updates.", has_access: true },
    ]
  },
]);

let selectedView = ref('monthly')

function onSelectionChanged(value) {
  selectedView.value = value;
}
</script>

<template>
  <section class="max-w-4xl mx-auto mt-11">
    <h1 class="text-lg font-semibold mb-2">Our Pricing</h1>
    <div class="md:flex justify-between gap-5 items-center">
      <p class="mb-5 md:mb-0 md:pr-5">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
      </p>
      <PricingButtonGroup @onSelectionChanged="onSelectionChanged" />
    </div>
    <div class="p-6 grid grid-cols-1 gap-4 lg:grid-cols-2 bg-white mt-5 rounded-md">
      <PricingCard
        v-for="(card, index) in cards"
        :key="index"
        :plan_name="card.plan_name"
        :cost="selectedView == 'monthly' ? card.monthly_cost : card.yearly_cost"
        :time="selectedView == 'monthly' ? 'month' : 'year'"
        :features="card.features"
      />
    </div>
  </section>
</template>

<style scoped></style>
