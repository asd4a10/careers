<script setup>
import { ref } from "vue";
import CompanyCard from "@/components/companies/CompanyCard.vue";

const companies = ref([
  { id: 1, name: "Google" },
  { id: 2, name: "Yandex" },
  { id: 3, name: "Meta" },
  { id: 4, name: "Amazon" },
  { id: 5, name: "Nvidia" },
  { id: 6, name: "Bloomberg" },
]);
</script>

<template>
  <div class="w-100">
    <h2>company list</h2>
    <v-row no-gutters class="d-flex flex-row flex-wrap gap-3">
      <v-col v-for="company in companies" :key="company.id" sm="3">
        <CompanyCard :company="company" class="ma-2 pa-2" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
