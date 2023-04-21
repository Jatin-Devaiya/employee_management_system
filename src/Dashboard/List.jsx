import React from "react";

const List = ({ employees, handleEdit,handleDelete  }) => {
  return (
    <div>
      <table className="table table-striped" border={3} >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th scope="col" colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? ( 
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <th scope="row">{i + 1}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td> 
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                {/* <td>{employee.id}</td> */}
                <td><button onClick={()=>handleEdit(employee?.id)}>Edit</button></td>
                <td><button onClick={()=>handleDelete(employee.id)}>Delete</button></td>
              </tr>
              
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default List;
