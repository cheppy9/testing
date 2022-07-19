import axios from "axios"
import React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { API_OBAT } from "../API"
import "../App.css"

class Obat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list_obat: [],

      show_detail: false,
      selected_detail : {}
    }

    this.showDetail = this.showDetail.bind(this)
    this.closeDetail = this.closeDetail.bind(this)
  }

  componentDidMount() {
    this.getListObat()
  }

  getListObat() {
    axios
      .get(API_OBAT, {
        headers: {
          'Authorization': localStorage.getItem('access_token')
        }
      })
      .then(response => {
        response = response.data

        this.setState({
          list_obat: response.data
        })
      })
  }

  showDetail(index) {
    this.setState({ 
      show_detail: true,
      selected_detail: this.state.list_obat[index]
    })
  }

  closeDetail() {
    this.setState({ show_detail: false })
  }

  render() {
    const { list_obat, show_detail, selected_detail } = this.state

    return (
      <main style={{ padding: "1rem 0" }} className="App-header">
        <h2>List Obat Page</h2>
        
        <div className="box-form">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Kode</th>
                <th scope="col">Nama Obat</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list_obat.map((value, index) => {
                return <tr key={index}>
                  <th scope="row">{ index+1 }</th>
                  <td>{ value.Kode_Obat }</td>
                  <td>{ value.Nama_Obat }</td>
                  <td>
                    <button 
                      className="btn btn-outline-info btn-sm" 
                      onClick={() => this.showDetail(index)}
                    >
                      Detail Obat
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>

        <Modal show={show_detail} onHide={this.closeDetail}>
          <Modal.Header closeButton>
            <Modal.Title>Detail Obat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Kode Obat :</label>
            <input type="text" className="form-control" value={selected_detail.Kode_Obat} readOnly />
            <p></p>

            <label>Nama Obat :</label>
            <input type="text" className="form-control" value={selected_detail.Nama_Obat} readOnly />
            <p></p>

            <label>Kadaluarsa :</label>
            <input type="text" className="form-control" value={selected_detail.Expired_Date} readOnly />
            <p></p>

            <label>Stok :</label>
            <input type="text" className="form-control" value={selected_detail.Jumlah} readOnly />
            <p></p>

            <label>Harga :</label>
            <input 
              type="text" 
              className="form-control" 
              value={'Rp. ' + parseInt(selected_detail.Harga).toLocaleString()} 
              readOnly />
            <p></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeDetail}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    )
  }
}

export default Obat