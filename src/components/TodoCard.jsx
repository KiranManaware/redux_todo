import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../feature/todos/todoSlice";

const TodoCard = ({todo}) => {
  const dispatch=useDispatch();
  const handleRemove=(id)=>{
    dispatch(
      removeTodo(id)
    )
  }
  const handleEdit=(todo)=>{
    dispatch(editTodo(todo))
  }

  return (
    <div className="relative p-5 rounded-lg border shadow-sm">
      <h1 className="text-2xl font-bold my-3">{todo.title}</h1>
      <p className="text-sm max-w-sm">{todo.description}</p>
      <span className="absolute top-4 right-4 flex space-x-3">
        <button onClick={()=>handleEdit(todo)} >
          <FaEdit className="text-yellow-500" />
        </button>
        <button onClick={()=>handleRemove(todo.id)} >
          <FaTrash className="text-red-500" />
        </button>
      </span>
    </div>
  );
};

export default TodoCard;
