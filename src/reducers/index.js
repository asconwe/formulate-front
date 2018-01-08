const initialState = {
    structureContent: []
}

function structure(state, action) {
    switch (action.type) {
        case "SET_VALUE_OF_ELEMENT":
            const element = Object.assign({}, state.structureContent[action.id], { value: action.text });
            const newStructureContent = 
                state.structureContent.slice(0, action.id)
                .concat(element)
                .concat(state.structureContent.slice(action.id + 1));
            return Object.assign({}, state, {
                structureContent: newStructureContent
            })
        default:
            return state;
    }
}

export default structure