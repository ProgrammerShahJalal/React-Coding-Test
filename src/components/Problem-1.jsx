import React, { useState } from "react";

const Problem1 = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("All"); // Default to "All"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const newTask = { name, status };
    setTasks([...tasks, newTask]);
    setName("");
  };

  const filterTasks = () => {
    if (status === "All") return tasks;
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${status === "All" && "active"}`}
                type="button"
                onClick={() => setStatus("All")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${status === "Active" && "active"}`}
                type="button"
                onClick={() => setStatus("Active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${status === "Completed" && "active"}`}
                type="button"
                onClick={() => setStatus("Completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterTasks().map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
