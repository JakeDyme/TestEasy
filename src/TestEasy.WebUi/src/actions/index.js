
export const fetchingActionsList = (fetching) =>{
    return {
        type: 'SET_FETCHING_ACTIONS',
        payload: fetching
    }
}

export const setActionsList = (itemsList) => {
    return {
        type: 'SET_ACTIONS',
        payload: itemsList
    }
}

export const setTestsList = (itemsList) => {
    return {
        type: 'SET_TESTS',
        payload: itemsList
    }
}

export const setSetupsList = (itemsList) => {
    return {
        type: 'SET_SETUPS',
        payload: itemsList
    }
}

export const setRoutinesList = (itemsList) => {
    return {
        type: 'SET_ROUTINES',
        payload: itemsList
    }
}

export const setCurrentSectionType = (sectionTypeEnumValue) => {
    return {
        type: 'SET_CURRENT_SECTION_TYPE',
        payload: sectionTypeEnumValue
    }
}

export const setCurrentEntity = (currentEntity) => {
    return {
        type: 'SET_CURRENT_EDITOR_ENTITY',
        payload: currentEntity
    }
}

export const setCurrentEntityItems = (currentEntityItems) => {
    return {
        type: 'SET_CURRENT_ENTITY_ITEMS',
        payload: currentEntityItems
    }
}
