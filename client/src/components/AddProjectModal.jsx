import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { FaList } from "react-icons/fa";
// import { ADD_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import Swal from "sweetalert2";

export const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");

  // const [addProject] = useMutation(ADD_PROJECT, {
  //   variables: { name, description, status, clientId },
  //   update(cache, { data: { addProject } }) {
  //     const { projects } = cache.readQuery({ query: GET_PROJECTS });

  //     cache.writeQuery({
  //       query: GET_PROJECTS,
  //       data: { projects: [...projects, addProject] },
  //     });
  //   },
  // });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || description === "" || status === "" || clientId === "") {
      return Swal.fire({
        text: "Please fill all the form fields.",
        icon: "warning",
      });
    }

    // addProject(name, description, status);

    Swal.fire({
      title: "Success",
      text: "Project added successfully.",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });

    setName("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>Add New Project</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModalLabel">
                New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Payroll Software"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="A project to create a payroll software to manage weekly payroll for upto 50 employees."
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};