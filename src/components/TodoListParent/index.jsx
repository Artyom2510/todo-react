import React, {Component} from 'react';

import './index.scss';

export default class BodyOfRows extends Component {

	startId = 1;

	state = {
		id: 0,
		isAdd: false,
		isOpen: false,
		isAllDone: false,
		itemTodo: [
			this.createItem('Drink tea'),
		],
	};

	onOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
		this.setState({ isAdd: false });
	}

	onAdd = () => {
		this.setState({
			isOpen: true,
			isAdd: !this.state.isAdd
		});
	}

	createItem(label) {
		return {
			label,
			id: this.startId++,
			checked: false
		}
	}

	deleteItem = (id) => {
		// if () {
			this.setState(({ itemTodo }) => {
				const index = itemTodo.findIndex((el) => el.id === id);
	
				const newArr = [
					...itemTodo.slice(0, index),
					...itemTodo.slice(index + 1)
				];
	
				return {
					itemTodo: newArr
				};
			});
		// }
	}

	onAddItem = (text) => {
		const newItem = this.createItem(text);

		this.setState(({itemTodo}) => {
			const newArr = [
				...itemTodo,
				newItem
			];
			return {
				itemTodo: newArr
			};
		});
	}

	toggleChange = (id) => {
		this.setState({
			isAllDone: !this.state.isAllDone
		});
	}

	const row = todos.map(item => {

		const { id, ...itemProps } = item;

		return (
			<li key={item.id} className="body-of-row__row row">
				<div className="row__head flex">
					<input type="checkbox" name="check1" id="check1" onChange={this.toggleChange} />
					<h1>Задача {id}</h1>
					<div className="row__head-btn flex">
						<button onClick={this.onOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
						<button onClick={this.onAdd}>{isAdd ? 'Отменить' : 'Создать'}</button>
					</div>
				</div>
			</li>
		);
	});

	render() {

		return (
			<ul className="body-of-row">
				{row}
			</ul>
		);

	}
};
