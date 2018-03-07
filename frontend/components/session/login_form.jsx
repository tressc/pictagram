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

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login({user: user});
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div className="session">
        <div className="session_block">
          <form onSubmit={this.handleSubmit} className="session_box form login">
            <h1>Pictagram</h1>
            <label>
              <input className="banana" placeholder="Username" type="text" value={this.state.username} onChange={this.update('username')}/>
            </label>
            <label>
              <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
            <button>Log in</button>
            <span className="errors">
              {this.props.errors}
            </span>
          </form>
          <div className="session_box toggle">
            <span>Don't have an account?  <Link to='/'>Sign up</Link></span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
