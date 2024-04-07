import React, { Component } from 'react'

export class Login extends Component {

  render() {
    return (
      <div className='container'>
       <input type="text"
                    placeholder="Enter Username"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                <input
                    placeholder="Enter User Password"
                    type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                <button onClick={() => { this.login() }} className="btn btn-primary">Login</button>

      </div>
    )
  }
}

export default Login