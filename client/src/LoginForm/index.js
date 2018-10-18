import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../actions/authActions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }


    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  // If you write onChange type functions with arrow
  // syntax, you don't need the .bind(this)
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Hi There!</h3>
              <p className="subtitle has-text-grey">
                Please log in to proceed.
              </p>
              <div className="box email-container">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames('input is-large', {
                          'is-danger': errors.email
                        })}
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (<div className="help is-danger">{errors.email}</div>)}
                    </div>
                  </div>

                  <div className="field disabled">
                    <div className="control">
                      <input
                        className={classnames('input is-large', {
                          'is-danger': errors.password
                        })}
                        type="password"
                        placeholder="Your Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (<div className="help is-danger">{errors.password}</div>)}
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="button is-block is-info is-large is-fullwidth"
                    value="Login"
                  />
                </form>
              </div>
              <p className="has-text-grey">
                <a href="./signup">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LoginForm);
