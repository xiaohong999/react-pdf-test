export const ADD_DOC = 'ADD_DOC';
export const SELECT_DOC = 'SELECT_DOC';

export const addDoc = (doc) => ({
    type: ADD_DOC,
    doc: doc,
});

export const selectDoc = (doc) => ({
    type: SELECT_DOC,
    doc: doc
})