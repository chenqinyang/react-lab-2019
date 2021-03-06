import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class RecordSummary extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<ul>
					{this.props.recordList.map( (rec, idx) => (
						<p> {rec.name} , {rec.date}</p>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	recordList : state.app.func
});

export default injectIntl ( connect(mapStateToProps) (RecordSummary) );
