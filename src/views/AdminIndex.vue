<template>
  <div><h1>Admin Index</h1></div>
  <router-view></router-view>
  <nav class="nav">
    <router-link exact-active-class="active" to="/admin">DashBoard</router-link>
    <router-link exact-active-class="active" to="/admin/manager-user"
      >Manager User</router-link
    >
    <router-link exact-active-class="active" to="/admin/manager-product"
      >Manager Product</router-link
    >
  </nav>
</template>

<script setup></script>

<style scoped>
.active {
  background-color: red;
  color: white;
}
.nav {
  display: flex;
  gap: 20px;
}
a {
  text-decoration: none;
}
</style>
