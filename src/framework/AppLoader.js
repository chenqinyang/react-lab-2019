import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class AppLoader extends Component {
  constructor(props) {
    super(props);
    console.log("++++Test: AppLoader is constructed.");

    this.state = { loadCount: 0};
  }

  componentWillMount () {
    console.log("++++Test: AppLoader is willMount.");
    // console.log ( "++++Test: loadCount = " , this.state.loadCount);
    let b4C = this.state.loadCount + 1;
    this.setState ( { loadCount: b4C} );
  }

  render() {

    console.log("++++Test: AppLoader is rendering.");

    return (
      <React.Fragment>
        <Alert variant={'info'}>
          AppLoader.js , counter is : {this.state.loadCount} 
        </Alert>
        <p>The url is : { this.props.location.pathname }</p>
      </React.Fragment>
    );
  }
}

export default AppLoader;
