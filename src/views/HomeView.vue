<script setup>
import {onMounted, ref} from "vue";

const count = ref(0);

function increment() {
    count.value++;
}

onMounted(() => {
    console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
    <div>
        home page
        feel free to click some buttons
        <v-btn @click="increment"> Count is: {{ count }}</v-btn>
    </div>
</template>
