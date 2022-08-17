import { Clients } from "../components/Clients";
import { AddClientModal } from "../components/AddClientModal";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <h1>Projects</h1>
      <Projects />
      <hr />
      <Clients />
      <div className="d-flex gap-3 mt-4 justify-content-end">
        <AddClientModal />
      </div>
    </>
  );
};
