import React, {Component} from 'react';
import AddItems from '../AddItems';
import TodoList from '../BodyOfRows';
import TodoList from '../TodoList';

import './index.scss';

export default class Row extends Component {

	render() {

		return (

			{
				isOpen && <>
					<TodoList
						onDelete={this.deleteItem}
						todos={itemTodo}
					/>
					{
						isAdd &&
						<AddItems onAddItem={this.onAddItem} />
					}
				</>
			}
		);
	};
}
