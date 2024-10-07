<template>
  <div>
    <h1>App Page</h1>
    <nav class="nav">
      <router-link to="/posts">List Posts</router-link> <br>
      <router-link to='/posts/:id'>Post Detail</router-link> <br>
      <router-link to="/">N4</router-link> 
    </nav>
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Hien thi cac components su dung co che lazy -->
        <template #default>
          <div>
            <component :is="Component"></component>
          </div>
        </template>
        <!-- Su dung hieu ung loading khi tai trang  -->
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup></script>

<style scoped>
.nav{
  position: sticky;
  top: 0;
  background-color: white;
}
</style>