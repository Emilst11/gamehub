const dataState = {
    list: [],
    isLoading: false,
}

const data = (state = dataState, action) => {
    const { payload, type } = action
    switch(type){
        case 'GET_LIST' || 'GET_FAILED':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_SUCCESS':
            return{
                list: payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default data