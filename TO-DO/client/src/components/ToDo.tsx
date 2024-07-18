import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Header from "./Header";
import axios from "axios";

interface Todo {
  text: string;
  completed: boolean;
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
    const res = await axios.get("/api/user");
    setUser(res.data.user);
    console.log("User:", res.data.user);
  };

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, completed: false }];

    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {user && <Header user={user} onLogout={handleLogout} />}
      <div className="w-full max-w-md mt-4">
        <h1 className="text-2xl font-bold text-center mb-4">ToDo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
