import { useSelector } from "react-redux";

const Navbar = () => {
  const {allTodos} =useSelector((state)=>state.todos)

  return (
    <nav className="py-4 px-5 bg-sky-700 flex justify-between">
      <h1 className="text-white text-lg font-bold uppercase">Tailwind Todo</h1>
      <h1 className="font-bold text-lg text-white">
        Count : {allTodos.length}
      </h1>
    </nav>
  );
};

export default Navbar;
