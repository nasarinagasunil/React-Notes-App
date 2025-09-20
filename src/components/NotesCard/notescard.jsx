import { useNotes } from "../../context/notesContext"

export const NotesCard = ({id, title, text, isPinned}) =>{
    const { notes, notesDispatch } = useNotes();

    const onPinClick = () => {
        notesDispatch({ type: "PIN_TOGGLE", payload: { id } });
    }
    
    return(
        <div key={id} className="flex flex-col gap-3 p-4 w-64 border rounded-md">
            <div className="flex justify-between">
                <p>{title}</p>
                <button onClick={onPinClick} className="cursor-pointer">
                    <span className={isPinned ? "material-icons" : "material-icons-outlined"}>
                        push_pin
                    </span>
                </button>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="flex gap-3 ml-auto">
                    <button>
                        <span className="material-icons-outlined">
                            archive
                        </span>
                    </button>
                    <button>
                        <span className="material-icons-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}