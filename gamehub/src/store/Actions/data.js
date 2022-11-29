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

export const like = (data) => {
    return{
        type: 'ADD_LIKE',
        payload : data
    }
}

export const dislike = (id) => {
    return{
        type: 'REMOVE_LIKE',
        payload : id
    }
}