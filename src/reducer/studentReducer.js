import * as types from "../constant"
const default_state = {
    listStudent: [],
    isFetching: false,
    error: null,
    activePage: 1,
    totalPage: 1,
    textSearch: ""
}


const studentReducer = (state = default_state, action) => {
    console.log(action.payload, "reducer")
    switch (action.type) {
        case types.GET_STUDENT_REQUEST:
        case types.ADD_STUDENT_REQUEST:
        case types.DELETE_STUDENT_REQUEST:
        case types.UPDATE_STUDENT_REQUEST:
        case types.SEARCH_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_STUDENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listStudent: action.payload.listStudent,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage
            }
        case types.SEARCH_STUDENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listStudent: action.payload.listStudent,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                textSearch: action.payload.textSearch
            }
        case types.ADD_STUDENT_SUCCESS:
        case types.DELETE_STUDENT_SUCCESS:
        case types.UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.GET_STUDENT_FAILURE:
        case types.ADD_STUDENT_FAILURE:
        case types.DELETE_STUDENT_FAILURE:
        case types.UPDATE_STUDENT_FAILURE:
        case types.SEARCH_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: true
            }
        default: return default_state

    }
}


export default studentReducer