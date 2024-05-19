import React, { useEffect, useState } from "react";

function AddTodo({ todoList, setTodoList, setShowAddTodo, setShowTodoList }) {
  const [task, setTask] = useState("");

  const addTodo = (task) => {
    setTodoList(() => {
      return [...todoList, task];
    });
  };

  return (
    <div className="outerContainer box-border w-1/2 mx-auto my-12 p-1 rounded-lg bg-red-500">
      <div className="todoContainer box-border  mx-auto p-1 flex justify-center items-center gap-2">
        <input
          type="text"
          className=" box-border w-fit px-3 py-1 rounded-lg outline-none cursor-pointer bg-gray-200 "
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button
          className=" box-border w-1/5 py-1 rounded-xl transition ease-in duration-500  bg-blue-300 hover:bg-green-500"
          onClick={() => {
            addTodo(task);
            setTask("");
          }}
        >
          Add To List
        </button>

        <button
          className=" box-border w-1/5 py-1 rounded-xl transition ease-in duration-500  bg-red-300 hover:bg-yellow-500"
          onClick={() => {
            setShowAddTodo(false);
            setShowTodoList(true);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
/*

*/
