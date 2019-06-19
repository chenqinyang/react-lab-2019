import React, { Component } from 'react';

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
        <p>AppLoader.js , counter is : {this.state.loadCount} </p>
      </React.Fragment>
    );
  }
}

export default AppLoader;
