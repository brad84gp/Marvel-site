

const INTITIAL_STATE = {
    characterInfo : []
}

function ComicReducer(state=INTITIAL_STATE, action){
    switch(action.type){
        case 'NEW_CHARACTER' :
            let res = action.payload
            return {...state, characterInfo : state.characterInfo = res[0]}
        case 'RESET_CHARACTER' : 
            return {INTITIAL_STATE}
        default :
            return state
    }
}

export default ComicReducer