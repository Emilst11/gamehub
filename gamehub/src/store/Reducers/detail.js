const detailState = {
    details: [],
    error: false,
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
                details: payload,
                error: true,
                isLoading: false
            }
        case 'BACK':
            return{
                details: [],
                error: false
            }
        default:
            return state
    }
}

export default detail