import {v4 as uuid} from 'uuid';
export const notesReducer = (state, {type,payload}) =>{
    switch(type){
        case "TITLE":
            return {
                ...state, 
                title: payload
            }
        case "TEXT":
            return {
                ...state, 
                text: payload
            }
        case "ADD_NOTES":
            return {
                ...state, 
                notes: [...state.notes, {title: state.title, text: state.text, id: uuid(), isPinned:false, isArchived:false}] 
            }
        case "RESET":
            return {
                ...state, 
                title: "", 
                text: ""
            }
        case "PIN_TOGGLE":
            return {
                ...state, 
                notes: state.notes.map(note => note.id === payload.id ? {...note, isPinned:!note.isPinned} : note)
            }
        case "ARCHIVE":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? {...note, isArchived:!note.isArchived} : note)
            }
        default:
            return state
        
    }

}