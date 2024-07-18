import React from "react";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    description?: string;
    done: boolean;
  };
  completeTodo: (id: number, done: boolean) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 my-2 rounded shadow">
      <div className={todo.done ? "line-through" : ""}>{todo.title}</div>
      <div>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => completeTodo(todo.id, todo.done)}
        >
          {todo.done ? "Undo" : "Complete"}
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
