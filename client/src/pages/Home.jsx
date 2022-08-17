import { Clients } from "../components/Clients";
import { AddClientModal } from "../components/AddClientModal";
import { AddProjectModal } from "../components/AddProjectModal";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <h1>Projects</h1>
      <Projects />
      <div className="d-flex gap-3 mt-4 mb-4">
        <AddProjectModal/>
      </div>
      <hr />
      <Clients />
      <div className="d-flex gap-3 mt-4 mb-4">
        <AddClientModal />
      </div>
    </>
  );
};
