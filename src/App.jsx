import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosGuardados = localStorage.getItem("todos");
    if (todosGuardados) {
      setTodos(JSON.parse(todosGuardados));
    }
  }, []);


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [todos]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completado: false,
    };
    setTodos([...todos, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTarea = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completado: !todo.completado } : todo
      )
    );
  };

  const actualizarTarea = (id, nuevoTexto) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, texto: nuevoTexto } : todo
      )
    );
  };

  return (
    <div>
      <h1>Listado de Pendientes</h1>
      <TodoForm agregarTarea={agregarTarea} />
      <TodoList
        todos={todos}
        eliminarTarea={eliminarTarea}
        toggleTarea={toggleTarea}
        actualizarTarea={actualizarTarea}
      />
    </div>
  );
}

export default App;
