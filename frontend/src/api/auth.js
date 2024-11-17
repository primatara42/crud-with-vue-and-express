import axios from 'axios';

const API = 'http://localhost:8000/api';

export const login = async (email, password) => {
  return axios.post(`${API}/login`, {
    email,
    password,
  });
};

export const register = async (name, email, password) => {
  return axios.post(`${API}/register`, {
    name,
    email,
    password,
  });
};


export const createDepartment = async (department_name, department_location) => {
  return axios.post(`${API}/departments`, {
    department_name,
    department_location,
  });
};


export const getDepartments = async () => {
  try {
    const response = await axios.get(`${API}/departments`);
    return response;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export const getDepartmentById = async (id) => {
  try {
    const response = await axios.get(`${API}/departments/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

// Update department
export const updateDepartment = async (id, department_name, department_location) => {

  let updatedData = {id, department_name, department_location};

  try {
      const response = await axios.put(`${API}/departments/${id}`, updatedData);
      console.log('Department updated:', response.data);
  } catch (error) {
      console.error('Error updating department:', error);
  }
}

// Delete department
export const deleteDepartment = async (id) => {
  try {
      const response = await axios.delete(`${API}/departments/${id}`);
      console.log('Department deleted:', response.data);
  } catch (error) {
      console.error('Error deleting department:', error);
  }
}


export const createEmployee = async (name, address, department_id, salary) => {
  return axios.post(`${API}/employees`, {
    name,
    address,
    department_id,
    salary
  });
};


export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API}/employees`);
    return response;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API}/employees/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Update employee
export const updateEmployee = async (id, name, address, department_id, salary) => {

  let updatedData = {id, name, address, department_id, salary};

  try {
      const response = await axios.put(`${API}/employees/${id}`, updatedData);
      console.log('Employee updated:', response.data);
  } catch (error) {
      console.error('Error updating employee:', error);
  }
}

// Delete employee
export const deleteEmployee = async (id) => {
  try {
      const response = await axios.delete(`${API}/employees/${id}`);
      console.log('Employee deleted:', response.data);
  } catch (error) {
      console.error('Error deleting employee:', error);
  }
}
