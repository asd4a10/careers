<script setup>
import {onMounted, ref} from "vue";

const count = ref(0)

function increment() {
    count.value++
}

onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})

</script>

<template>
    <main>
        home page
        <button @click="increment">Count is: {{ count }}</button>
    </main>
</template>
