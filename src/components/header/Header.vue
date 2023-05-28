<template>
  <v-app-bar :elevation="2" density="compact">
    <v-container class="mx-auto d-flex">
      <v-btn variant="text" to="/careers">Careers</v-btn>
      <v-btn variant="text" to="/companies">Companies</v-btn>
      <v-btn variant="text" to="/job-posts">Jobs</v-btn>
      <v-btn variant="text" to="/forum">Forum</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" to="/auth">Sign in</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
