<script setup>
import {RouterView} from "vue-router";
import Header from "@/components/header/Header.vue";
</script>

<template>
    <v-app>
        <Header/>
        <v-main class="bg-my-gray">
            <v-container class="mx-auto d-flex">
                <RouterView/>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
