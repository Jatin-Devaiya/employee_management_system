import employeesData from "../../data";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UADATE_EMPLOYEE,
} from "./employeeTypes";

const initialState = {
  employees: employeesData,
  // error:null
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.employee],
      };
    case UADATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.id) {
            return { ...employee, ...action.employee };
          }
          return employee;
        }),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.id
        ),
      };
    default:
      return state;
  }
};
