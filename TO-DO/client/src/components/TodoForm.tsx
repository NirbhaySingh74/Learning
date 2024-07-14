import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between bg-white p-4 my-2 rounded shadow"
    >
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
