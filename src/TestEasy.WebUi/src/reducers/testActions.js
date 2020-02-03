
const testActionsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_ACTIONS': 
            return state = action.payload;
        default: 
            return state;
    }
}

export default testActionsReducer;
