const likeState = {
    lists: [],
}

const likes = (state = likeState, action) => {
    const { payload, type } = action
    switch(type){
        case 'ADD_LIKE':
            const datas = {
                id: payload?.id,
                name: payload?.name
            }
            return{
                ...state,
                lists: [...state.lists, datas]
            }
        case 'REMOVE_LIKE':
            return{
                ...state,
                lists: state.lists.filter(item => item.id !== payload)
            }
        default:
            return state
    }
}

export default likes