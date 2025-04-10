import { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import ProjectTable from "./ProjectTable";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProjectAdded = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Sourcing Tracker</h1>
      <AddProjectForm onProjectAdded={handleProjectAdded} />
      <ProjectTable refresh={refresh} />
    </div>
  );
}

export default App;
