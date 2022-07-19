import axios from "axios"
import React from "react"
import { API_LOGIN } from "../API"
import "../App.css"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const body_request = {
      username: this.state.username,
      password: this.state.password
    }
    axios
      .post(API_LOGIN, body_request)
      .then((response) => {
        response = response.data
        
        // store token to local storage
        localStorage.setItem('access_token', response.access_token)
        // get token from local storage
        // console.log(localStorage.getItem('access_token'))

        alert('Login Berhasil Maseh!');
      })
      .catch((error) => {
        alert(error)
      });

    event.preventDefault();
  }

  render() {
    return (
      <main style={{ padding: "1rem 0" }} className="App-header">
        <h2>Login Page</h2>
  
        <form className="box-form" onSubmit={this.handleSubmit}>
          <label>Username :</label>
          <input type="text" name="username" className="form-control" onChange={this.handleChange} />
          <br/>
  
          <label>Password :</label>
          <input type="password" name="password" className="form-control" onChange={this.handleChange} />
          <br/><br/>
  
          <button type="submit" className='btn btn-primary form-control'>MASUK!</button>
        </form>
      </main>
    )
  }
}

export default Login