export const initialItem = {
    time_stamp: '',
    date: null,
    name: '',
    price: 0,
    deleted: false
}

export const initailState = {
    datalist: [
        {
            time_stamp: '',
            date: null,
            name: '',
            price: 0,
            deleted: false
        },
        {
            time_stamp: '',
            date: null,
            name: '',
            price: 0,
            deleted: false
        },
        {
            time_stamp: '',
            date: null,
            name: '',
            price: 0,
            deleted: false
        },
        {
            time_stamp: '',
            date: null,
            name: '',
            price: 0,
            deleted: false
        }

    ],
    loading: false,
    error: ''
}

export const LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
    SAVE_DATA = 'SAVE_DATA',
    DELETE_DATA = 'DELETE_DATA',
    GET_LIST = 'GET_LIST',
    DELETE_LIST = 'DELETE_LIST'

//=============================================
// REDUCERS
//=============================================
export default (state = initailState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ..._getCommonState(state),
                loading: true
            }
        case LOADING_END:
            return {
                ..._getCommonState(state),
                loading: false
            }
        case SAVE_DATA:
            return {
                ..._getCommonState(state),
                datalist: [
                    ...state.datalist,
                    action.payload
                ]
            }
        case DELETE_DATA:
            return {
                ..._getCommonState(state),
                error: action.payload
            }
        case GET_LIST:
            return {
                ..._getCommonState(state),
                datalist: action.payload
            }
        case DELETE_LIST:
            return {
                ..._getCommonState(state),
                datalist: []
            }
        default:
            return state

    }
}

const _getCommonState = (state) => ({
    ...state,
    loading: false,
    error: ""
})


//=============================================
// ACTOINS
//=============================================
export const loading_start = () => ({
    type: LOADING_START
})
export const loading_end = () => ({
    type: LOADING_END
})
export const save_data = (data) => ({
    type: SAVE_DATA,
    payload: data
})
export const delete_data = (data) => ({
    type: DELETE_DATA,
    payload: data
})
export const get_list = (data) => ({
    type: GET_LIST,
    payload: data
})
export const delete_list = () => ({
    type: DELETE_LIST,
})