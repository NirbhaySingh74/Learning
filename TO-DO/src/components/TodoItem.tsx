import React from "react";

interface TodoItemProps {
  todo: string;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 my-2 rounded shadow">
      <div className={todo.completed ? "line-through" : ""}>{todo.text}</div>
      <div>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => removeTodo(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
