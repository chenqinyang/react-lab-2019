import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

function LeaveSummary (props) {

	return (
		<div>
			<ul>
				{props.recordList.map( (rec, idx) => (
					<p> {rec.name} , {rec.date}</p>
				))}

				<button onClick={ () => { this.props.history.push('/create') } }>XXX</button>
			</ul>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	recordList : state.app.func
});

export default injectIntl ( connect(mapStateToProps) (LeaveSummary) );
