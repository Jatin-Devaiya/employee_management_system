import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateEmployee } from "../redux/employee/employeeAction";
import EditForm from "./EditForm";

const Edit = ({ selectedEmployees, setIsEdding }) => {
  const dispatch = useDispatch();
  const id = selectedEmployees.id;

  const [firstName, setFirstName] = useState(selectedEmployees.firstName);
  const [lastName, setLastName] = useState(selectedEmployees.lastName);
  const [email, setEmail] = useState(selectedEmployees.email);
  const [salary, setSalary] = useState(selectedEmployees.salary);
  const [date, setDate] = useState(selectedEmployees.date);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !salary || !date || !email) {
      return Swal.fire({
        icon: "error",
        title: "error",
        text: "All Fields are required",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    dispatch(updateEmployee(id, employee));
    setIsEdding(false);

    Swal.fire({
      icon: "success",
      title: "Updated",
      text: `${employee.firstName} ${employee.lastName} data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <EditForm
        handleUpdate={handleUpdate}
        setIsEdding={setIsEdding}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        salary={salary}
        setSalary={setSalary}
        date={date}
        setDate={setDate}
      />
    </>
  );
};

export default Edit;
