import React, { useState } from 'react'
import Swal from "sweetalert2";


const Edit = ({ employees, setEmployees, selectedEmployees, setIsEdding }) => {

  const id = selectedEmployees.id

  const [firstName, setFirstName] = useState(selectedEmployees.firstName)
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
        showConfirmButton: true
      })
    }
    
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    }
    for(let i = 0; i < employees.length; i++){
      if(employees[i].id === id){
        employees.splice(i,1,employee);
        break;
      }
    }

    setEmployees(employees)
    setIsEdding(false);
  
    Swal.fire({
      icon:"success",
      title:"Updated",
      text:`${employee.firstName} ${employee.lastName} data has been updated.`,
      showConfirmButton:false,
      timer:2000
    })

  }

  return (
    <>

      <form onSubmit={handleUpdate}>
        <h2>Edit Employee</h2>

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
          Update
        </button>
        <button className="btn btn-primary" onClick={() => setIsEdding(false)}>Cancel</button>
      </form>
    </>
  )
}

export default Edit
