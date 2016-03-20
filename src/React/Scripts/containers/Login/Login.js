import React, { Component } from 'react';
import { LoginForm } from 'components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

class Register extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.pushState('/');
    }
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <h4>Use a local account to log in.</h4>
        <hr />
        <LoginForm />
        <p>
          <Link to="/register">Register as a new user?</Link>
        </p>
      </div>
    );
  }
}

export default connect(
state => ({ user: state.auth.user }),
{ pushState: push }
)(Register);