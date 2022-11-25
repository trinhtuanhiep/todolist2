import { put, select, takeEvery } from 'redux-saga/effects'
import * as types from '../constant'
import * as callAPI from '../FetchAPI/fetchAPI'
import * as actions from '../action/studentAction'

function* handleGetStudent(action) {

    try {
        const res = yield callAPI.getPaginateStudent(action.payload.activePage)
        console.log(res, "sagaaa")
        console.log(action.payload, "action saga")
        yield put(actions.getStudentSuccess({
            listStudent: res.listStudent,
            totalPage: res.totalPage,
            activePage: action.payload.activePage
        }))
    } catch (error) {
        yield put(actions.getStudentFailure(error))
    }
}
function* handleAddStudent(action) {
    try {
        yield callAPI.addStudent(action.payload)
        const totalPage = yield select((state) => state.student.totalPage)
        const activePage = yield select((state) => state.student.activePage)
        yield put(actions.addStudentSuccess())
        yield put(actions.getStudentRequest({ activePage: totalPage }))
    } catch (error) {
        yield put(actions.addStudentFailure(error))
    }
}

function* handleDeleteStudent(action) {
    console.log(action.payload, "saga")
    try {
        yield callAPI.deleteStudent(action.payload)
        const activePage = yield select((state) => state.student.activePage)
        const listStudent = yield select((state) => state.student.listStudent)
        yield put(actions.deleteStudentSuccess())
        yield put(actions.getStudentRequest({ activePage: activePage }))
    } catch (error) {
        yield put(actions.deleteStudentFailure(error))
    }
}

function* handleUpdateStudent(action) {
    try {
        yield callAPI.updateStudent(action.payload)
        const activePage = yield select((state) => state.student.activePage)
        yield put(actions.updateStudentSuccess())
        yield put(actions.getStudentRequest({ activePage: activePage }))
    } catch (error) {
        yield put(actions.updateStudentFailure(error))

    }
}

function* handleSearch(action) {
    try {
        const res = yield callAPI.searchStudent(action.payload)
        console.log(res, "saga")
        yield put(actions.searchStudentSuccess({
            listStudent: res.student,
            totalPage: res.totalPage,
            activePage: action.payload.activePage,
            textSearch: action.payload.textSearch
           
        }))
    } catch (error) {
        yield put(actions.searchStudentFailure(error))
    }
}



const studentSaga = [
    takeEvery(types.GET_STUDENT_REQUEST, handleGetStudent),
    // 1: request, 2: hàm xử lý tương ứng với cái request
    takeEvery(types.ADD_STUDENT_REQUEST, handleAddStudent),
    takeEvery(types.DELETE_STUDENT_REQUEST, handleDeleteStudent),
    takeEvery(types.UPDATE_STUDENT_REQUEST, handleUpdateStudent),
    takeEvery(types.SEARCH_STUDENT_REQUEST, handleSearch)
]
export default studentSaga