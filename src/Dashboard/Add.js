import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addEmployee } from "../redux/employee/employeeAction";
import AddForm from "./AddForm";

const Add = ({ setIsAdding }) => {
  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !salary || !date || !email) {
      return Swal.fire({
        icon: "error",
        title: "error",
        text: "All Fields are required",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName: firstName,
      lastName,
      email,
      salary,
      date,
    };
    dispatch(addEmployee(newEmployee));
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName} data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <AddForm
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        salary={salary}
        setSalary={setSalary}
        date={date}
        setDate={setDate}
        handleAdd={handleAdd}
        setIsAdding={setIsAdding}
      />

      {/* <form onSubmit={handleAdd}>
        <h2>Add Employee</h2>

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-md-3">
          Add
        </button>
        <button className="btn btn-primary" onClick={()=>setIsAdding(false)}>Cancel</button>
      </form> */}
    </>
  );
};

export default Add;
