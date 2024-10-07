<template>
  <div v-if="product" class="body">
    <h2>{{ product.name }}</h2>
    <!-- <img :src="product.image" alt="Lỗi Ảnh" /> -->
     <img v-if="product.image" :src="product.image" alt="Lỗi Ảnh" />

    <p>Giá: {{ product.price }} VND</p>
    <router-link to="/list-products">
      <button>Quay lại danh sách</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);

// Lấy sản phẩm theo ID từ URL
const productId = route.params.id;
const products = JSON.parse(localStorage.getItem("products"));
product.value = products.find((p) => p.id == productId);
</script>

<style scoped>
.body {
  border: 1px solid #ccc;
  width: 500px;
  height: 200px;
  text-align: center;
}
</style>
