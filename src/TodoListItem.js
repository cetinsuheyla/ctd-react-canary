import React from "react";

function TodoListItem({ item, onRemoveTodo }) {
	return (
		<div>
			<li>{item.fields.Title}</li>
			<button type="button" onClick={() => onRemoveTodo(item.id)}>
				Remove
			</button>
		</div>
	);
}

export default TodoListItem;
