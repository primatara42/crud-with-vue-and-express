<template>
    <div>
        <Header></Header>

        <div class="wrap-page mt-5">
            <div class="container mt-5">
                <h1 class="text-center mb-4">Edit Department</h1>

                <form @submit.prevent="handleEdit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" v-model="name" type="text" class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label for="location" class="form-label">Location</label>
                        <input id="location" v-model="location" type="text" class="form-control" required />
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import { getDepartmentById, updateDepartment } from '../api/auth';

export default {
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            location: '',
            departmentId: this.$route.params.id,
        };
    },
    mounted() {
        this.fetchDepartment();
    },
    methods: {
        async fetchDepartment() {
            try {
                const response = await getDepartmentById(this.departmentId);
                this.name = response.data.department_name;
                this.location = response.data.department_location;
            } catch (error) {
                alert('Failed to load department data');
            }
        },
        async handleEdit() {
            try {
                await updateDepartment(this.departmentId, this.name, this.location);
                alert('Department updated!');
                this.$router.push('/');
            } catch (error) {
                alert('Failed to update department');
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