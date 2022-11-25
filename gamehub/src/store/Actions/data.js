export const getData = () => {
    return{
        type: 'GET_LIST'
    }
}

export const getDetail = id => {
    return{
        type: 'GET_DETAIL',
        payload: id
    }
}

export const back = () => {
    return{
        type: 'BACK'
    }
}