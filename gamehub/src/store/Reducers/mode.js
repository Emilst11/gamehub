const modeState = {
    dark: true
}

const mode = (state = modeState, action) => {
    const { payload, type } = action
    switch(type){
        case 'CHANGE':
            return{
                dark: payload
            }
        default:
            return state
    }
}

export default mode