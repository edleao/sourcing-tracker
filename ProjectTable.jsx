import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function ProjectTable({ refresh }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, [refresh]);

  async function fetchProjects() {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (error) console.error(error.message);
    else setProjects(data);
  }

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Projetos Cadastrados</h2>
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Comprador</th>
            <th className="px-4 py-2">Commodity</th>
            <th className="px-4 py-2">Savings</th>
            <th className="px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.buyer}</td>
              <td className="px-4 py-2">{p.commodity}</td>
              <td className="px-4 py-2">{p.savings}</td>
              <td className="px-4 py-2">{p.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
