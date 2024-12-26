import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import TodosContainer from "./components/TodosContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container p-8">
        <Form />
        <TodosContainer />
      </div>
    </>
  );
};

export default App;
