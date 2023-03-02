import { useDispatch } from "react-redux";
import { achieveTodo, deleteTodo, updateTask } from "../features/todo";
import { FaTrash } from "react-icons/fa";

export default function TodoCard({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between w-full items-center gap-3 border-b border-orange-200 py-2">
      <div className="flex w-[80%] items-center gap-5">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch(achieveTodo(todo))}
        />
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={(e) =>
            dispatch(updateTask({ ...todo, task: e.target.textContent }))
          }
          className={`w-full outline-none break-words ${
            todo.done ? "line-through" : ""
          }`}
        >
          {todo.task}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(todo))}
        className="bg-white p-3 rounded-full text-red-600 text-bold hover:bg-red-600 hover:text-white transition-all"
      >
        <FaTrash className="h-6 w-6" />
      </button>
    </div>
  );
}
