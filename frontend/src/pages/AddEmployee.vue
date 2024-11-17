<template>
  <div>
    <Header></Header>

    <div class="wrap-page mt-5">
      <div class="container mt-5">
        <h1 class="text-center mb-4">Add Employee</h1>

        <form @submit.prevent="handleAdd">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input id="name" v-model="name" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input id="address" v-model="address" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="department" class="form-label">Department</label>
            <!-- Correctly bind department id -->
            <select id="department" v-model="department_id" class="form-control" required>
              <option value="">Select Departement</option>
              <option v-for="(item, index) in departments" :key="index" :value="item.id">
                {{ item.department_name }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="salary" class="form-label">Salary</label>
            <input id="salary" v-model="salary" type="number" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary w-100">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { createEmployee, getDepartments } from '../api/auth';

export default {
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      address: '',
      salary: '',
      departments: [],
      department_id: '', // Add department_id to store selected department
    };
  },
  mounted() {
    this.fetchDepartment();
  },
  methods: {
    async fetchDepartment() {
      try {
        const response = await getDepartments();
        this.departments = response.data;
      } catch (error) {
        alert('Failed to load departments');
      }
    },

    async handleAdd() {
      try {
        const response = await createEmployee(this.name, this.address, this.department_id,  this.salary);
        alert('Employee added successfully!');
        this.$router.push('/employee');
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