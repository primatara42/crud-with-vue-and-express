import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AddDepartment from '../pages/AddDepartment.vue';
import EditDepartment from '../pages/EditDepartment.vue';
import Employee from '../pages/Employee.vue';
import AddEmployee from '../pages/AddEmployee.vue';
import EditEmployee from '../pages/EditEmployee.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [
  { 
    path: '/', 
    component: Home, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },
  { 
    path: '/add_department', 
    component: AddDepartment, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },
  { 
    path: '/edit_department/:id',
    name: 'edit-department',
    component: EditDepartment, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },

  { 
    path: '/employee', 
    component: Employee, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },
  { 
    path: '/add_employee', 
    component: AddEmployee, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },
  { 
    path: '/edit_employee/:id',
    name: 'edit-employee',
    component: EditEmployee, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) next();
      else next('/login');
    }
  },


  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
