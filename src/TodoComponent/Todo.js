import react from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

 export const Todo = ({}) => {
  const [todoList, setTodoList] = useState([]);

  const updateTodoState = (todoText) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        todo: todoText,
        status: 1,
      },
    ]);
  };

  const markAsDone=(id) => {

const temp=todoList.map(el => {

  if(el.id==id){
    return{...el ,status:2}
  }else{
    return el;  }
})
setTodoList(temp)
  }
  return (
    <div className="todo-main">
      <AddTodo update={updateTodoState} />
      <TodoList todoList={todoList} markAsDone={markAsDone} />
    </div>
  );
};

export default Todo