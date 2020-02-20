import React from 'react';
import TodoListItem from '../TodoListItem';
import './index.scss';

const TodoList = ({ todos, onDelete, onToggleDone }) => {

	const els = todos.map(item => {

		const { id, ...itemProps } = item;

		return (
			<li key={item.id}>
				<TodoListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleDone={() => onToggleDone(id)}
				/>
			</li>
		);
	});

	return (
		<ul>
			{ els }
		</ul>
	);
};

export default TodoList;
