const initialState = {
    elements: []
}

function structure(state, action) {
    switch (action.type) {
        case "SET_VALUE_OF_ELEMENT":
            const element = Object.assign({}, state.elements[action.id], { value: action.text });
            const newElements = 
                state.elements.slice(0, action.id)
                .concat(element)
                .concat(state.elements.slice(action.id + 1));
            return Object.assign({}, state, {
                elements: newElements
            })
        default:
            return state;
    }
}

export default structure