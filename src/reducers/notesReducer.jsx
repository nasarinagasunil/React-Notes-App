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
                notes: [...state.notes, {title: state.title, text: state.text, id: uuid(), isPinned:false, isArchived:false, isDeleted:false}] 
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
        case "DELETE":
            return {
                ...state,
                notes: state.notes.some(note => note.id === payload.id && note.isDeleted) ? 
                state.notes.filter(note => note.id!== payload.id) : 
                state.notes.map(note => note.id === payload.id? {...note, isDeleted: true} : note)
            }
        case "RESTORE":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id? {...note, isDeleted: false, isArchived: false} : note)
            }

        default:
            return state
        
    }

}