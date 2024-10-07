<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="Enter value" />
    <button @click="handleClick">Search</button>

    <p>Value: {{ value }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const inputValue = ref("");

const value = computed(() => {
  return route.query.value;
});

const handleClick = () => {
  router.push({
    path: "/input",
    query: {
      value: inputValue.value,
    },
  });
};
</script>

<style></style>
