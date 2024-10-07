<template>
  <div>
      <h1>ADMIN</h1>
      <nav class="nav">
          <router-link exact-active-class="active" to="/admins"
          >Dash Board</router-link
          >
          <router-link exact-active-class="active" to="/admins/manager-user"
          >User</router-link
          >
          <router-link exact-active-class="active" to="/admins/manager-product"
          >Product</router-link
          >
          <router-link exact-active-class="active" to="/admins/setting"
          >Setting</router-link
          >
        </nav>
        <router-view></router-view>
  </div>
</template>

<script setup></script>
<style scoped>
.active {
  background-color: red;
  color: white;
  padding: 5px;
  
}
.nav {
  display: flex;
  gap: 20px;
}
a {
  text-decoration: none;
}
</style>
