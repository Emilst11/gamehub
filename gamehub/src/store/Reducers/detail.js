const detailState = {
    details: [],
    error: null,
    isLoading: false
}

const detail = (state = detailState, action) => {
    const { type, payload } = action
    switch(type){
        case 'GET_DETAIL':
            return{
                ...state,
                isLoading: true
            }
        case 'DETAIL_SUCCESS':
            return{
                ...state,
                isLoading: false,
                details: payload
            }
        case 'DETAIL_FAILED':
            return{
                ...state,
                error: payload
            }
        case 'BACK':
            return{
                details: [],
                error: null
            }
        default:
            return state
    }
}

export default detail