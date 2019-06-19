import React, { Component } from 'react';
import { connect } from 'react-redux'

import history from '../framework/history';

class Header extends Component {
	constructor(props) {
		super(props);
		this.tabChange = this.tabChange.bind(this);
	}

	tabChange (e) {
		console.log("++++Test: tabChange, e = ", e.target);
		history.push(e.target.id);
	}

	render() {

		console.log("++++Test: Header.state = ", this.props.activePath);

		return (
			<React.Fragment>
				<div className="card text-center">
					<div className="card-header">
						<ul className="nav nav-tabs card-header-tabs">
							<li className="nav-item">
								{ this.props.location && this.props.location.pathname === '/create' ?
									<a id='create' className="nav-link active" href="#" onClick={this.tabChange}>Create</a>
									:
									<a id='create' className="nav-link" href="#" onClick={this.tabChange}>Create</a>
								}
							</li>
							<li className="nav-item">
								{ this.props.location && this.props.location.pathname === '/summary' ?
									<a id='summary' className="nav-link active" href="#"  onClick={this.tabChange}>Summary</a>
									:
									<a id='summary' className="nav-link" href="#"  onClick={this.tabChange}>Summary</a>
								}
								
							</li>
						</ul>
					</div>
					<div className="card-body">
						<h5 className="card-title">pathname = {this.props.location && this.props.location.pathname}</h5>
						{/* <p className="card-text">It is for me to study React , Redux, Saga etc.</p> */}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	location : state.router.location
});

export default connect(mapStateToProps)(Header);
