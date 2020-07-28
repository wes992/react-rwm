import React, { Component } from "react";
// import {StateContext } from '../stateContext';
import connect from '../store/connect';


class Login extends Component {
  // state = {  }
  render() {

    const { data } = this.props;
    return <p>{JSON.stringify(data())}</p>;
  }
}

// Login.contextType = StateContext;
const mapStateToProps = (state) => {
  return { 
    data: state.data2
  }
}

export default connect(mapStateToProps)(Login);
