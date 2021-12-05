import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
	const [todoList, setTodoList] = useState([]);

	function addTodo(newTodo) {
		setTodoList([...todoList, newTodo]);
	}

  function removeTodo(id){
    const filteredTodos = todoList.filter(item => (item.id !== id));
    setTodoList(filteredTodos);
  }

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />

			<TodoList todoList={todoList} onRemoveTodo = {removeTodo}/>
		</div>
	);
}

export default App;
