<template>
  <div>
    <h2>List product</h2>
    <input v-model="searchQuery" placeholder="Tìm kiếm theo tên" />
    <button @click="searchProduct">Tìm kiếm</button>

    <div class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-item"
      >
        <img :src="product.image" alt="Product image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} VND</p>
        <router-link :to="`/products-detail/${product.id}`">
          <button>Xem chi tiết</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const products = ref([
  {
    id: 1,
    name: "Điện thoại iPhone 15 Pro",
    price: "30.000.000",
    image:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",
  },
  {
    id: 2,
    name: "Điện thoại OPPO Reno11 5G",
    price: "10.600.000",
    image:
      "https://www.pinoytechnoguide.com/wp-content/uploads/2024/01/OPPO-Reno11-5G.jpg",
  },
  {
    id: 3,
    name: "Điện thoại vivo Y17s",
    price: "3.300.000",
    image:
      "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1695036030504/a0b8ebbd9519976ee039a9a43e98d9bf.png",
  },
  {
    id: 4,
    name: "Điện thoại Nokia 8210 4G",
    price: "3.300.000",
    image:
      "https://th.bing.com/th/id/R.d9299742ffd2eb17b34b88d3bcfcaa00?rik=mF0CTAbGrXZX%2bg&pid=ImgRaw&r=0",
  },
]);

// Tìm kiếm sản phẩm dựa trên tên
const filteredProducts = computed(() => {
  if (searchQuery.value) {
    return products.value.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return products.value;
});

const searchProduct = () => {};
</script>

<style scoped>
.product-list {
  display: flex;
  gap: 20px;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.product-item img {
  width: 150px;
  height: 150px;
}
</style>
