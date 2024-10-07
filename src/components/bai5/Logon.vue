<template>
    <div class="login-container">
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Passwords:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const handleLogin = () => {
    if (username.value === 'admin' && password.value === 'password') {
     
      console.log('Logged in successfully');
    } else {
      errorMessage.value = 'Invalid username or password.';
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input {
    width: 200px;
    padding: 0.5em;
    margin: 0.5em 0;
  }
  
  button {
    width: 100%;
    padding: 0.5em;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .error {
    color: red;
  }
  </style>
  