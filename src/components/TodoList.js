import React from "react";

function TodoList({ todoList, setTodoList }) {
  console.log(todoList);
  return (
    <div className="outerContainer box-border w-1/2 my-12 py-12 rounded-xl bg-green-700 mx-auto flex flex-col gap-8 items-start">
      <h1 className="box-border w-full text-center text-2xl text-white font-medium">
        List of all tasks
      </h1>
      {todoList.map((todo, index) => (
        <div
          key={index}
          className="todoListContainer box-border w-full pl-4 py-1 rounded-xl flex justify-start items-center bg-red-500"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="box-border w-fit h-5 w-6"
          />
          <p className="para box-border w-4/5 ml-4 text-xl">{todo}</p>
          <button
            className="deleteBtn box-border  w-fit px-2  mr-4 rounded-lg bg-green-500 "
            onClick={() => {
              console.log(index);
              let newTodoList = todoList.filter(
                (item) => item !== todoList[index]
              );
              setTodoList(newTodoList);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
