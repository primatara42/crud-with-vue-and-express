<template>
  <div>
    <Header></Header>

    <div class="wrap-page mt-5">
      <div class="container mt-5">
        <h1 class="text-center mb-4">Add Department</h1>

        <form @submit.prevent="handleAdd">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input id="name" v-model="name" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input id="location" v-model="location" type="text" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary w-100">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { createDepartment } from '../api/auth';

export default {
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      location: '',
    };
  },
  methods: {
    async handleAdd() {
      try {
        const response = await createDepartment(this.name, this.location);
        alert('Add data successful!');
        this.$router.push('/');
      } catch (error) {
        alert('Add data failed.');
      }
    },
  },
};
</script>

<style scoped>
.wrap-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>