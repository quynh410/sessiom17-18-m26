<template>
  <div>
    <h1>List Product</h1>
    <input type="text" v-model="keySearch" />
    <input type="number" v-model="priceValue" />
    <button @click="handleSearch">Search</button> <br />

    <b>Product Name : {{ productInfo.productName }}</b> <br />
    <b>Price : {{ productInfo.price }}</b> <br />
    <!-- <b>Price : {{ route.query.price }}</b> -->
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter(); // chuyen trang
const route = useRoute(); // lays du lieu tu URL

const keySearch = ref("");
const priceValue = ref(0);

// const productName = computed(()=>{
//     return route.query.productName;
// })

// lat gia tri tren URl va cap nhat cho reactive query Params
const productInfo = computed(() => {
  return {
    productName: route.query.productName,
    price: route.query.price,
  };
});

const handleSearch = () => {
  router.push({
    path: "/list-product",
    query: {
      productName: keySearch.value,
      price: priceValue.value,
    },
  });
};
</script>

<style></style>
