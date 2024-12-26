import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../feature/todos/todoSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch=useDispatch();
  const {edit}=useSelector(state=>state.todos)


  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit? dispatch(
      updateTodo({id:edit.todo.id,title,description})
    ) : dispatch(
      addTodo({id:crypto.randomUUID(),title,description})
    )
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
  }, [edit]);

  return (
    <div className="p-5 rounded-lg border">
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          className="border w-full p-3 rounded-lg placeholder:text-sm my-2"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border w-full p-3 rounded-lg placeholder:text-sm my-2"
          placeholder="Enter Descripion"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-green-700 text-white py-2.5 px-3 w-full rounded-lg hover:bg-green-900 duration-150">
          <p className="font-semibold">Save</p>
        </button>
      </form>
    </div>
  );
};

export default Form;
