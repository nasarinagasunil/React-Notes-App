import {v4 as uuid} from 'uuid';
export const notesReducer = (state, {type,payload}) =>{
    switch(type){
        case "TITLE":
            return {...state, title: payload}
        case "TEXT":
            return {...state, text: payload}
        case "ADD_NOTES":
            return {...state, notes: [...state.notes, {title: state.title, text: state.text, id: uuid()}] }
        case "RESET":
            return {...state, title: "", text: ""}
        default:
            return state
        
    }

}