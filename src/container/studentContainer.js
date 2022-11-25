import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../action/studentAction'
import StudentComponent from '../component/studentComponent'


export class studentContainer extends Component {
    componentDidMount() { // vòng đời sau khi render nó sẽ thực hiện 1 việc gì đó
        this.props.getPaginateStudent({activePage: 1})
    }
    render() {

        return (
            <div>
                <StudentComponent {...this.props} //lấy tất cả dữ liệu có trong props
                />
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    console.log(store)
     // định nghĩa ra các props gắn dữ liệu từ store vào
    return {
        listStudent: store.student.listStudent,
        isFetching: store.student.isFetching,
        totalPage: store.student.totalPage,
        activePage: store.student.activePage,
        textSearch: store.student.textSearch
    }
}



const mapDispatchToProps = (dispatch) => { //định nghĩa ra các props 
    return {
        getPaginateStudent: (payload) => dispatch(actions.getStudentRequest(payload)),
        addStudent: (payload) => dispatch(actions.addStudentRequest(payload)),
        deleteStudent: (payload) => dispatch(actions.deleteStudentRequest(payload)),
        updateStudent: (payload) => dispatch(actions.updateStudentRequest(payload)),
        searchStudent: (payload) => dispatch(actions.searchStudentRequest(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(studentContainer)



