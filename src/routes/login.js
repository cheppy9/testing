import '../App.css';

function Login() {
  return (
    <main style={{ padding: "1rem 0" }} className="App-header">
      <h2>Login Page</h2>

      <form className="box-form">
        <label fot="username">Username :</label>
        <input type="text" id="username" className="form-control" />
        <br/>

        <label fot="username">Password :</label>
        <input type="password" id="password" className="form-control" />
        <br/><br/>

        <button type="submit" className='btn btn-primary form-control'>MASUK!</button>
      </form>
    </main>
  );
}

export default Login;