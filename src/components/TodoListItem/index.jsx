import React, {Component} from 'react';
import './index.scss';

export default class TodoListItem extends Component {

	render() {

		const {label = false, onDelete, done} = this.props;

		let classNames = 'label';

		if (done) {
			classNames += 'done';
		}

		return (
			<div className="row-inside flex">
				<div className="row-inside__wrap">
					<input type="checkbox" name="" id=""/>
					<span className={classNames}> {label} </span>
				</div>
				<button type="button" className="btn-del" onClick={onDelete}>Del</button>
			</div>
		);
	};
}
