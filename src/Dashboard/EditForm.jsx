import React from "react";

const EditForm = ({
  handleUpdate,
  setIsEdding,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  salary,
  setSalary,
  date,
  setDate,
}) => {
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
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-md-3">
          Update
        </button>
        <button className="btn btn-primary" onClick={() => setIsEdding(false)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditForm;
