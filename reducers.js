import { ADD_DOC, SELECT_DOC } from './action'

const initialState = {
    docs: [],
    selectedDoc: null
}

function itemReducer(state = initialState, action) {
   switch (action.type) {
        case ADD_DOC:
            return {
                ...state, docs: [...state.docs, action.doc]
            }
        case SELECT_DOC:
            return {
                ...state, selectedDoc: action.doc
            }
      default:
         return state
   }
}

export default itemReducer