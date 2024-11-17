<template>
  <div class="register-page">
    <div class="container mt-5">
      <h1 class="text-center mb-4">Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input id="username" v-model="username" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input id="password" v-model="password" type="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
      <div class="text-center mt-3">
        <p>Already have an account?</p>
        <router-link to="/login" class="btn btn-outline-secondary w-100">
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '../api/auth';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await register(this.username, this.email, this.password);
        alert('Register successful!');
        this.$router.push('/login');
      } catch (error) {
        alert('Register failed. Check your credentials.');
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>