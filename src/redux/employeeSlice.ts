import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeesType, employeeType } from "../server";

interface employeesState {
  employees: employeesType | [];
}

const initialState: employeesState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<employeesType>) => {
      state.employees = action.payload;
    },

    addEmployee: (state, action: PayloadAction<employeeType>) => {
      state.employees = [...state.employees, action.payload];
    },

    copyEmployee: (state, action: PayloadAction<number>) => {
      const employee = state.employees.find(
        (item) => item.id === action.payload
      );
      if (employee) {
        const copy = { ...employee, id: Date.now() };
        state.employees = [...state.employees, copy];
      }
    },

    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (item) => item.id !== action.payload
      );
    },

    deleteSalary: (
      state,
      action: PayloadAction<{ salaryId: number; id: number }>
    ) => {
      const employee = state.employees.find(
        (item) => item.id === action.payload.id
      );
      const employeeIndex = state.employees.findIndex(
        (item) => item.id === action.payload.id
      );

      if (employee) {
        const salaries = employee.salaries.filter(
          (item) => item.salaryId !== action.payload.salaryId
        );
        const modifyEmployeeSalary = { ...employee, salaries };

        state.employees = [
          ...state.employees.slice(0, employeeIndex),
          modifyEmployeeSalary,
          ...state.employees.slice(employeeIndex + 1),
        ];
      }
    },
  },
});

export const {
  setEmployees,
  addEmployee,
  copyEmployee,
  deleteEmployee,
  deleteSalary,
} = employeesSlice.actions;

export const employeesReducer = employeesSlice.reducer;
