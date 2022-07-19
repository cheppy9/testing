import axios from "axios"
import React from "react"
import { Navigate } from "react-router-dom"
import { API_REGISTER } from "../API.js"
import '../App.css'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nama_lengkap: '',
      alamat: '',
      telepon: '',
      username: '',
      password: '',

      goToLogin: false
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
      nama_lengkap: this.state.nama_lengkap,
      alamat: this.state.alamat,
      telepon: this.state.telepon,
      username: this.state.username,
      password: this.state.password
    }
    axios
      .post(API_REGISTER, body_request)
      .then((response) => {
        response = response.data

        alert('Terimakasih sudah mendaftar :)')
        this.setState({ goToLogin: true })
      })
      .catch((error) => {
        alert(error)
      });

    event.preventDefault();
  }

  render() {
    if (this.state.goToLogin)
      return <Navigate replace to="/login" />

    return (
      <main style={{ padding: "1rem 0" }} className="App-header">
        <h2>Register Page</h2>
  
        <form className="box-form" onSubmit={this.handleSubmit}>
          <label>Nama Lengkap :</label>
          <input type="text" name="nama_lengkap" className="form-control" onChange={this.handleChange} />
          <br/>
          
          <label>Alamat :</label>
          <input type="text" name="alamat" className="form-control" onChange={this.handleChange} />
          <br/>
          
          <label>Telepon :</label>
          <input type="text" name="telepon" className="form-control" onChange={this.handleChange} />
          <br/>
          
          <label>Username :</label>
          <input type="text" name="username" className="form-control" onChange={this.handleChange} />
          <br/>
  
          <label>Password :</label>
          <input type="password" name="password" className="form-control" onChange={this.handleChange} />
          <br/><br/>
  
          <button type="submit" className='btn btn-primary form-control'>DAFTAR!</button>
        </form>
      </main>
    );
  }
}

export default Register;