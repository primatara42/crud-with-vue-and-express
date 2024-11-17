<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h1 class="text-center mb-4">Login</h1>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" id="email" class="form-control" v-model="email"
                  placeholder="Enter your email" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" v-model="password"
                  placeholder="Enter your password" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <div class="text-center mt-3">
              <p>Don't have an account?</p>
              <router-link to="/register" class="btn btn-outline-secondary w-100">
                Register
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { login } from '../api/auth';

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await login(this.email, this.password);
          const { access_token } = response.data;
          console.log(response);
          localStorage.setItem('token', access_token); // Save token for authentication
          alert('Login successful!');
          this.$router.push('/'); // Redirect to a protected route
        } catch (error) {
          alert('Login failed. Check your credentials.');
        }
      },
    },
  };
</script>