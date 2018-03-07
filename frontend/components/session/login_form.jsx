import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.update('username')}/>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <button>Log in</button>
        </form>
        <span>Don't have an account? <Link to='/signup'>Sing up</Link></span>
      </div>
    );
  }
}

export default withRouter(LoginForm);
