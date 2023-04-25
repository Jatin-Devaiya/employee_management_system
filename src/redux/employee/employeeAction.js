import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UADATE_EMPLOYEE,
} from "./employeeTypes";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    employee,
  };
};

export const updateEmployee = (id, employee) => {
  return {
    type: UADATE_EMPLOYEE,
    id,
    employee,
  };
};

export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    id,
  };
};
