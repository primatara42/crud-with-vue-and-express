<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();

        foreach($employees as $item){
            $department = Department::find($item->department_id);
            $item->department = $department->department_name;
        }

        return response()->json($employees);
    }

    public function detail($id)
    {
        $employees = Employee::find($id);
        return response()->json($employees);
    }


    public function store(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'salary' => 'required|numeric',
            'department_id' => 'required|numeric',
        ]);

        // Find the related department
        $department = Department::find($request['department_id']);

        // Check if the department exists
        if (!$department) {
            return response()->json(['error' => 'Department not found'], 404);
        }

        // Create the employee, passing validated data and adding department name
        $employee = Employee::create($validated);

        return response()->json([
            'message' => 'Employee added successfully!',
            'employee' => $employee,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'salary' => 'required|numeric',
            'department_id' => 'required|numeric',
        ]);

        // Find the employee by ID
        $employee = Employee::find($id);

        // Check if employee exists
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }


        // Update the employee with the validated data
        $employee->update($validated);

        // Return a success response with the updated employee
        return response()->json([
            'message' => 'Employee updated successfully!',
            'employee' => $employee,
        ]);
    }


    public function destroy($id)
    {
        // Find the employee by ID
        $employee = Employee::find($id);

        // Check if employee exists
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        // Delete the employee
        $employee->delete();

        // Return a success response
        return response()->json([
            'message' => 'Employee deleted successfully!',
        ]);
    }
}
