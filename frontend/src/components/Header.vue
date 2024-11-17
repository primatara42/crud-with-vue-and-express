<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Employee and Department Information Management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto" style="vertical-align: center;align-self: center;">
                    <router-link to="/employee" class="nav-link w-100">
                        Employee
                    </router-link>
                    <router-link to="/" class="nav-link  w-100">
                        Department
                    </router-link>
                    <div class="ms-3">
                        <button @click="handleLogout" class="btn btn-sm btn-danger">Logout</button>
                    </div>
                </div>

            </div>

        </div>
    </nav>
</template>


<script>

export default {
    methods: {

        async handleLogout() {
            const isConfirmed = window.confirm("Are you sure you want to logout?");
            if (isConfirmed) {
                const token = localStorage.getItem('token');
                try {
                    localStorage.removeItem('token');
                    this.$router.push('/login');
                } catch (error) {
                    alert('Logout failed.');
                }
            }
        }
        ,
    },
};
</script>