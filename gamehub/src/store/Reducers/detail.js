const detailState = {
    details: [],
    error: null
}

const detail = (state = detailState, action) => {
    const { type, payload } = action
    switch(type){
        case 'DETAIL_SUCCESS':
            return{
                ...state,
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