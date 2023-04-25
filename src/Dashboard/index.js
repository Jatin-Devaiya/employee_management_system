import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/employee/employeeAction";

const Deshboard = () => {
  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [selectedEmployees, setSelectedEmployees] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEddting, setIsEdding] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployees(employee);
    setIsEdding(true);
  };

  const handleDelete = (employee) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this",
      showCancelButton: true,
      confirmButtonText: "yes,delete it!",
      cancelButtonText: "cancle",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteEmployee(employee.id));

        Swal.fire({
          icon: "success",
          title: "Deleted!.",
          text: `${employee.firstName} ${employee.lastName} data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {!isAdding && !isEddting && (
        <>
          <Header setIsAdding={setIsAdding} />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && <Add setIsAdding={setIsAdding} />}

      {isEddting && (
        <Edit
          employees={employees}
          selectedEmployees={selectedEmployees}
          setIsEdding={setIsEdding}
        />
      )}
    </div>
  );
};

export default Deshboard;
