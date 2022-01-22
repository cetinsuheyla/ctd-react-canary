import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			fetch(URL, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			})
				.then((response) => response.json())
				.then((result) => {
					setTodoList([...result.records]);
					setIsLoading(false);
				}),
		[]
	);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
	}, [todoList]);

	function addTodo(newTodo) {
		setTodoList([...todoList, newTodo]);
	}

	function removeTodo(id) {
		const filteredTodos = todoList.filter((item) => item.id !== id);
		setTodoList(filteredTodos);
	}

	return (
		<>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<p>Loading..</p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</>
	);
}

export default App;
