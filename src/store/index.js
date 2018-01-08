import { createStore } from 'redux'
import structure from '../reducers'

export const store = createStore(structure)

export default function configureStore() {
    return store;
}