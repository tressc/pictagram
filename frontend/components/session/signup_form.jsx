import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      full_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup({user: user});
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    if (this.props.currentUser) {
      this.props.history.push('/home');
    }
    return (
      <div>
        <ul>
          {this.props.errors}
        </ul>
        <form>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update('email')}></input>
          </label>
          <label>Full Name
            <input type="text" value={this.state.full_name} onChange={this.update('full_name')}></input>
          </label>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.update('username')}></input>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')}></input>
          </label>
        </form>
        <span>
          Have an account? <Link to='/login'>Log in</Link>
        </span>
      </div>
    );
  }

}

export default SignUpForm;
