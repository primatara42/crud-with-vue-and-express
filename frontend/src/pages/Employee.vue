<template>
  <div>
    <Header></Header>

    <div class="row mt-5" style="justify-content: center;align-items: center;">
      <div class="col-6">
        <h2 class="mt-3">Employee</h2>
      </div>
      <div class="col-6 text-end">
        <router-link to="/add_employee" class="btn btn-success">
          Add Employee
        </router-link>
      </div>
    </div>


    <table class="table table-responsive">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Departement</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in employees" :key="index">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.department }}</td>
          <td>Rp {{ item.salary }}</td>
          <td>
            <a @click="handleEdit(item)" class="btn btn-sm btn-primary me-2">Edit</a>
            <a @click="handleDelete(item.id)" class="btn btn-sm btn-danger">Delete</a>
          </td>
          <!-- Display the employee name -->
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { getEmployees, deleteEmployee } from '../api/auth';

export default {
  components: {
    Header,
  },
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await getEmployees();
        this.employees = response.data;
      } catch (error) {
        alert('Failed to load employees');
      }
    },

    async handleEdit(employee) {
      this.$router.push({ name: 'edit-employee', params: { id: employee.id } });
    },

    async handleDelete(id) {
      const isConfirmed = window.confirm("Are you sure you want to delete this data?");
      if (isConfirmed) {
        try {
          await deleteEmployee(id);
          alert('Employee deleted!');
          this.fetchEmployees(); // Reload employees after deletion
        } catch (error) {
          alert('Failed to delete employee');
        }
      }
    },
  },
};
</script>