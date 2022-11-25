import * as types from '../constant'



function getStudentRequest(payload) {
    return {
        type: types.GET_STUDENT_REQUEST,
        payload
    }
}
function getStudentSuccess(payload) {  //nơi chứa dữ liệu trả về trong trường hợp success
    return {
        type: types.GET_STUDENT_SUCCESS,
        payload
    }
}
function getStudentFailure(payload) { //nơi chứa lỗi trảz về trường hợp failure
    return {
        type: types.GET_STUDENT_FAILURE,
        payload
    }
}


function addStudentRequest(payload) {
    return {
        type: types.ADD_STUDENT_REQUEST,
        payload
    }
}



function addStudentSuccess(payload) {  //nơi chứa dữ liệu trả về trong trường hợp success
    return {
        type: types.ADD_STUDENT_SUCCESS,
        payload
    }
}


function addStudentFailure(payload) { //nơi chứa lỗi trảz về trường hợp failure
    return {
        type: types.ADD_STUDENT_FAILURE,
        payload
    }
}


function deleteStudentRequest(payload) {
    return {
        type: types.DELETE_STUDENT_REQUEST,
        payload
    }
}

function deleteStudentSuccess(payload) {  //nơi chứa dữ liệu trả về trong trường hợp success
    return {
        type: types.DELETE_STUDENT_SUCCESS,
        payload
    }
}



function deleteStudentFailure(payload) { //nơi chứa lỗi trảz về trường hợp failure
    return {
        type: types.DELETE_STUDENT_FAILURE,
        payload
    }
}



function updateStudentRequest(payload) {
    return {
        type: types.UPDATE_STUDENT_REQUEST,
        payload
    }
}

function updateStudentSuccess(payload) {  //nơi chứa dữ liệu trả về trong trường hợp success
    return {
        type: types.UPDATE_STUDENT_SUCCESS,
        payload
    }
}



function updateStudentFailure(payload) { //nơi chứa lỗi trảz về trường hợp failure
    return {
        type: types.UPDATE_STUDENT_FAILURE,
        payload
    }
}



function searchStudentRequest(payload) {
    return {
        type: types.SEARCH_STUDENT_REQUEST,
        payload
    }
}

function searchStudentSuccess(payload) {  //nơi chứa dữ liệu trả về trong trường hợp success
    return {
        type: types.SEARCH_STUDENT_SUCCESS,
        payload
    }
}



function searchStudentFailure(payload) { //nơi chứa lỗi trảz về trường hợp failure
    return {
        type: types.SEARCH_STUDENT_FAILURE,
        payload
    }
}


export {
    getStudentRequest,
    getStudentSuccess,
    getStudentFailure,
    addStudentFailure,
    addStudentRequest,
    addStudentSuccess,
    deleteStudentFailure,
    deleteStudentRequest,
    deleteStudentSuccess,
    updateStudentFailure,
    updateStudentRequest,
    updateStudentSuccess,
    searchStudentFailure,
    searchStudentRequest,
    searchStudentSuccess
}





