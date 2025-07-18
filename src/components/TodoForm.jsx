import { useState } from "react";

function TodoForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto !== "") {
      agregarTarea(texto);
      setTexto("");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
