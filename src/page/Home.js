import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import history from '../framework/history';
import { updateSession } from '../action/session';

class Home extends Component {

  constructor(props) {
    super(props);

    this.navClick = this.navClick.bind(this);
  }

  navClick() {
    this.props.updateSession({newField: 'hoho'});
    history.push('/Information');
  }

  render() {

    return (
      <div className="jumbotron">
        <h1 className="display-4">Entry</h1>
        <p className="lead">This is just a testing project for studying react and webpack.</p>
        <hr className="my-4" />
        <p>React Router as navigation control framework.</p>

        <FormattedMessage
          id='hello'
          // description=''
          // defaultMessage='Hello, Howard'
        />

        <br/>
        <button type="button" class="btn btn-success" onClick={this.navClick}>Success</button>
      </div>
    );
  }
}

Home = connect(
  null,
  { updateSession }
)(Home)

export default injectIntl (Home) ;
