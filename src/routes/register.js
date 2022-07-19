import '../App.css';

function Register() {
  return (
    <main style={{ padding: "1rem 0" }} className="App-header">
      <h2>Register Page</h2>

      <form className="box-form">
        <label fot="nama_lengkap">Nama Lengkap :</label>
        <input type="text" id="nama_lengkap" className="form-control" />
        <br/>
        
        <label fot="alamat">Alamat :</label>
        <input type="text" id="alamat" className="form-control" />
        <br/>
        
        <label fot="telepon">Telepon :</label>
        <input type="text" id="telepon" className="form-control" />
        <br/>
        
        <label fot="username">Username :</label>
        <input type="text" id="username" className="form-control" />
        <br/>

        <label fot="username">Password :</label>
        <input type="password" id="password" className="form-control" />
        <br/><br/>

        <button type="submit" className='btn btn-primary form-control'>DAFTAR!</button>
      </form>
    </main>
  );
}

export default Register;