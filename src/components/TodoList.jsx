import { useState } from "react";

function TodoList({ todos, eliminarTarea, toggleTarea, actualizarTarea }) {
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  const iniciarEdicion = (todo) => {
    setEditandoId(todo.id);
    setTextoEditado(todo.texto);
  };

  const guardarEdicion = (id) => {
    if (textoEditado.trim() !== "") {
      actualizarTarea(id, textoEditado.trim());
      setEditandoId(null);
      setTextoEditado("");
    }
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setTextoEditado("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completado}
            onChange={() => toggleTarea(todo.id)}
          />
          {editandoId === todo.id ? (
            <>
              <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
              />
              <button onClick={() => guardarEdicion(todo.id)}>Guardar</button>
              <button onClick={cancelarEdicion}>Cancelar</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completado ? "line-through" : "none",
                }}
              >
                {todo.texto}
              </span>
              <button onClick={() => iniciarEdicion(todo)}>Editar</button>
              <button onClick={() => eliminarTarea(todo.id)}>Eliminar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
