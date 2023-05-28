<template>
  <v-card :title="company['name']" subtitle="tags" text="Info about company">
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4"> Learn More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  company: Object,
});
</script>

<style scoped></style>
