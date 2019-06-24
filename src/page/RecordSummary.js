import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

class RecordSummary extends Component {

	render() {

		return (
			<div>
				<ul>
					{this.props.recordList.map( (rec, idx) => (
						<p> {rec.name} , {rec.date}</p>
					))}

					<button onClick={ () => { this.props.history.push('/create') } }>XXX</button>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	recordList : state.app.func
});

export default injectIntl ( connect(mapStateToProps) (RecordSummary) );
