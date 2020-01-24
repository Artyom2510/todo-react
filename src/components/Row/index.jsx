import React, {Component} from 'react';

import './index.scss';

export default class Row extends Component {

	state = {
		id: 0,
		isAdd: false,
		isOpen: false,
		childs: [
			{
				id: 0,
				isChecked: false
			}
		]
	};

	onOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	onAdd = () => {
		this.setState({
			isOpen: true,
			isAdd: !this.state.isAdd
		});
	}

	render() {

		const {isOpen, isAdd, id} = this.state;

		return (
			<div className="row">
				<div className="row__head flex">
					<input type="checkbox" name="check1" id="check1"/>
					<h1>Задача {id}</h1>
					<div className="row__head-btn flex">
						<button onClick={this.onOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
						<button onClick={this.onAdd}>{isAdd ? 'Отменить' : 'Создать'}</button>
					</div>
				</div>
				{
					isOpen && <>
						<div className="row__body flex">
							<input type="checkbox" name="check11" id="check11"/>
							<h2>Подзадача 1</h2>
							<button>Удалить</button>
						</div>
						{
							isAdd &&
							<div className="row__bottom flex">
								<input type="text" autoFocus={true} />
								<button>OK</button>
							</div>
						}
					</>
				}
			</div>
		);
	};
}
