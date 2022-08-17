import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import Swal from "sweetalert2";

export const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You would not be able to revert this.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject();
        Swal.fire(
          "Project Deleted",
          "The project has been deleted.",
          "success"
        );
      }
    });
  };
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={handleDelete}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
};
