import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function AddProjectForm({ onProjectAdded }) {
  const [form, setForm] = useState({
    name: "",
    state: "",
    buyer: "",
    commodity: "",
    savings: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("projects").insert([form]);
    if (error) alert("Erro ao salvar: " + error.message);
    else {
      alert("Projeto salvo com sucesso!");
      setForm({ name: "", state: "", buyer: "", commodity: "", savings: "" });
      onProjectAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Novo Projeto</h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required className="p-2 border" />
        <input name="state" value={form.state} onChange={handleChange} placeholder="Estado" required className="p-2 border" />
        <input name="buyer" value={form.buyer} onChange={handleChange} placeholder="Comprador" className="p-2 border" />
        <input name="commodity" value={form.commodity} onChange={handleChange} placeholder="Commodity" className="p-2 border" />
        <input name="savings" value={form.savings} onChange={handleChange} placeholder="Savings" className="p-2 border" />
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Salvar Projeto
      </button>
    </form>
  );
}
