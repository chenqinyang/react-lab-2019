import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import history from '../framework/history';
import { addRecord } from '../action/function';

class CreateRecord extends Component {
	constructor(props) {
		super(props);
		this.clickCreate = this.clickCreate.bind(this);
		this.fieldChange = this.fieldChange.bind(this);

		this.state = {
			name: 'QY',
			date: '20190101'
		};
	}

	clickCreate(e) {
		console.log('++++Test: clickCreate e = ', e);
		alert (e.target.dataset.testat);
		this.props.addRecord( this.state );
		this.setState( {
			name: '',
			date: ''
		});

		history.push('/summary');
	}

	fieldChange (e) {
		this.state[e.target.id] = e.target.value;
		this.setState( this.state );
	} 

	render() {

		return (
			<div>
				<form>
					<div className="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" placeholder="Please input your name..." value={this.state.name} onChange={this.fieldChange} />
					</div>
					<div class="form-group">
						<label for="date">Date</label>
						<input type="text" class="form-control" id="date" placeholder="Please input the date..." value={this.state.date} onChange={this.fieldChange} />
					</div>

					<button type="button" class="btn btn-outline-info" data-testat="bbbya" onClick={this.clickCreate}>Create</button>
				</form>
			</div>
		);
	}
}

export default injectIntl (connect(null, {addRecord})(CreateRecord) );
