import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

// Construct password confirmation
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }))
    }
  

  render() {
    const { errors } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign Up</h3>
              <div className="box">
                <figure className="avatar">
                  <img
                    alt="avatar"
                    src="https://openclipart.org/image/2400px/svg_to_png/190113/1389952697.png"
                  />
                </figure>
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames('input is-large', {
                          'is-danger': errors.email
                        })}
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (<div className="help is-danger">{errors.email}</div>)}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames('input is-large', {
                          'is-danger': errors.password
                        })}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}                        
                      />
                      {errors.password && (<div className="help is-danger">{errors.password}</div>)}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames('input is-large', {
                          'is-danger': errors.password2
                        })}
                        name="password2"
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                      {errors.password2 && (<div className="help is-danger">{errors.password2}</div>)}
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Sign Up"
                    className="button is-block is-info is-large is-fullwidth"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
