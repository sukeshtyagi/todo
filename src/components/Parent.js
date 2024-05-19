import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Parent() {
  const [showAddTodo, setShowAddTodo] = useState(true);
  const [showTodoList, setShowTodoList] = useState(false);

  const [todoList, setTodoList] = useState([]);
  return (
    <div className="parentContainer box-border w-full">
      {showAddTodo && (
        <AddTodo
          todoList={todoList}
          setTodoList={setTodoList}
          setShowAddTodo={setShowAddTodo}
          setShowTodoList={setShowTodoList}
        />
      )}
      {showTodoList && (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      )}
    </div>
  );
}

export default Parent;
