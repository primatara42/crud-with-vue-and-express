<template>
  <div>
    <Header></Header>

    <div class="row mt-5" style="justify-content: center;align-items: center;">
      <div class="col-6">
        <h2 class="mt-3">Department</h2>
      </div>
      <div class="col-6 text-end">
        <router-link to="/add_department" class="btn btn-success">
          Add Department
        </router-link>
      </div>
    </div>


    <table class="table table-responsive">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in departments" :key="index">
        <tr>
          <td>{{ index + 1 }}</td> <!-- Display the index (1-based) -->
          <td>{{ item.department_name }}</td> <!-- Display the department name -->
          <td>{{ item.department_location }}</td> <!-- Display the department name -->
          <td>
            <a @click="handleEdit(item)" class="btn btn-sm btn-primary me-2">Edit</a>
            <a @click="handleDelete(item.id)" class="btn btn-sm btn-danger">Delete</a>
          </td>
          <!-- Display the department name -->
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import { getDepartments, deleteDepartment } from '../api/auth';

export default {
  components: {
    Header,
  },
  data() {
    return {
      departments: [],
    };
  },
  mounted() {
    this.fetchDepartments();
  },
  methods: {
    async fetchDepartments() {
      try {
        const response = await getDepartments();
        this.departments = response.data;
      } catch (error) {
        alert('Failed to load departments');
      }
    },

    async handleEdit(department) {
      this.$router.push({ name: 'edit-department', params: { id: department.id } });
    },

    async handleDelete(id) {
      const isConfirmed = window.confirm("Are you sure you want to delete this data?");
      if (isConfirmed) {
        try {
          await deleteDepartment(id);
          alert('Department deleted!');
          this.fetchDepartments(); // Reload departments after deletion
        } catch (error) {
          alert('Failed to delete department');
        }
      }
    },
  },
};
</script>