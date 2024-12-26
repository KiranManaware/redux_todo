import React from 'react'
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';


const TodosContainer = () => {
  const {allTodos} =useSelector((state)=>state.todos)
  return (
    <div className="my-5 grid md:grid-cols-3 gap-4">
      {
        allTodos.map((todo)=><TodoCard key={todo.id} todo={todo} /> )
      }
    </div>
  );
};

export default TodosContainer;
