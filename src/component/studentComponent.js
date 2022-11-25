import React, { Component } from 'react'

export default class studentComponent extends Component {
  state = {
    name: "",
    updateName: "",
    id: "",
    textSearch: ""
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleClick = () => {
    this.props.addStudent({ name: this.state.name })
  }

  deleteClick = (id) => {
    this.props.deleteStudent({ id })
  }

  handlePaginte = (i) => {
    this.props.getPaginateStudent({ activePage: i })
  }

  updateChange = (e) => {
    this.setState({
      updateName: e.target.value
    })
  }

  ClickChoose = (item) => {
    this.setState({
      id: item._id,
      updateName: item.name,
    })
  }

  handleUpdateClick = () => {
    this.props.updateStudent({ name: this.state.updateName, id: this.state.id })
  }

  searchChange = (e) => {
    this.setState({
      textSearch: e.target.value
    })
  }

  searchClick = () => {
    this.props.searchStudent({ textSearch: this.state.textSearch, activePage: 1 })
  }

  render() {
    let data = []
    let btn = []
    let totalPage = this.props.totalPage
    let Studentprops = this.props.listStudent
    if (Studentprops) {
      data = Studentprops.map((item, idx) => {
        return (

          <tr key={idx}>
            <th>{item.name}</th>
            <th><button onClick={() => this.deleteClick(item._id)}>delete</button></th>
            <th><button onClick={() => this.ClickChoose(item)}>choose</button></th>
          </tr>

        )
      })
    }

    if (totalPage) {
      for (let i = 1; i <= totalPage; i++) {
        btn.push(
          <button key={i} onClick={() => this.props.textSearch ? this.props.searchStudent({
            activePage: i,
            textSearch: this.state.textSearch
          }) : this.props.getPaginateStudent({ activePage: i })}
            style={
              this.props.activePage === i ? { background: "red" } : { background: null }
            }
          >{i}</button>
        )
      }
    }
    return (
      <>
        <div>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Thêm mới</button>
        </div>
        <div>
          <input type="text" value={this.state.updateName} onChange={this.updateChange} />
          <button onClick={this.handleUpdateClick}>Update</button>
        </div>
        <div>
          <input type="text" value={this.state.textSearch} onChange={this.searchChange} />
          <button onClick={this.searchClick}>search</button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Tên</td>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
        <div>
          {btn}
        </div>
      </>
    )
  }
}
