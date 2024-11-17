<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return response()->json($departments);
    }

    public function detail($id)
    {
        $departments = Department::find($id);
        return response()->json($departments);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'department_name' => 'required|string|max:255',
            'department_location' => 'required|string|max:255',
        ]);

        $department = Department::create($validated);

        return response()->json([
            'message' => 'Department added successfully!',
            'department' => $department,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate incoming data
        $validated = $request->validate([
            'department_name' => 'required|string|max:255',
            'department_location' => 'required|string|max:255',
        ]);

        // Find the department by ID
        $department = Department::find($id);

        // Check if department exists
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }

        // Update the department with validated data
        $department->update($validated);

        // Return a success response with the updated department
        return response()->json([
            'message' => 'Department updated successfully!',
            'department' => $department,
        ]);
    }

    public function destroy($id)
    {
        // Find the department by ID
        $employees = Employee::where('department_id',$id);
        $department = Department::find($id);

        // Check if department exists
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }

        $employees->delete();
        // Delete the department
        $department->delete();

        // Return a success response
        return response()->json([
            'message' => 'Department deleted successfully!',
        ]);
    }
}
