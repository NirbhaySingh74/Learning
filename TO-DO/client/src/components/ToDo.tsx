import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Header from "./Header";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  description?: string;
  done: boolean;
}

interface User {
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

const ToDo: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const getUser = async () => {
    try {
      const res = await axios.get("/api/user");
      setUser(res.data.user);
      console.log("User:", res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/alltodo");
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (title: string) => {
    try {
      const res = await axios.post("/api/addtodos", { title });
      setTodos([...todos, res.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const completeTodo = async (id: number, done: boolean) => {
    try {
      await axios.put(`/api/todos/${id}`, { done: !done });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    } catch (error) {
      console.error("Error completing todo:", error);
    }
  };

  const removeTodo = async (id: number) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    getUser();
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {user && <Header user={user} onLogout={handleLogout} />}
      <div className="w-full max-w-md mt-4">
        <h1 className="text-2xl font-bold text-center mb-4">ToDo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.length === 0 ? (
          <p className="text-center text-lg text-gray-700">
            Hi {user?.firstName}, please add a todo list.
          </p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDo;
