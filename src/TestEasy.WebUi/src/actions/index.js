
export const FetchingActionsList = (fetching) =>{
    return {
        type: 'SET_FETCHING_ACTIONS',
        payload: fetching
    }
}

export const SetActionsList = (testActionList) => {
    return {
        type: 'SET_ACTIONS',
        payload: testActionList
    }
}

export const SetTestsList = (testActionList) => {
    return {
        type: 'SET_TESTS',
        payload: testActionList
    }
}

export const SetSetupsList = (testActionList) => {
    return {
        type: 'SET_SETUPS',
        payload: testActionList
    }
}

export const SetRoutinesList = (testActionList) => {
    return {
        type: 'SET_ROUTINES',
        payload: testActionList
    }
}
