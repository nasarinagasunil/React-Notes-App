import { useNotes } from "../../context/notesContext"

export const NotesCard = ({id, title, text, isPinned, isArchived, isDeleted}) =>{
    const { notes, notesDispatch } = useNotes();

    const onPinClick = () => {
        notesDispatch({ type: "PIN_TOGGLE", payload: { id } });
    }
    
    const OnArchiveClick = (id) => {
        notesDispatch({ type: "ARCHIVE", payload: { id } });
    }
    
    const onDeleteClick = (id) => {
        notesDispatch({ type: "DELETE", payload: { id } });
    }

    const onRestoreClick = (id) => {
        notesDispatch({ type: "RESTORE", payload: { id } });
    }

    const onDeleteForeverClick = (id) => {
        notesDispatch({ type: "DELETE", payload: { id } });
    }

    return(
        <div key={id} className="flex flex-col gap-3 p-4 w-64 border rounded-md">
            
            <div className="flex justify-between">
                <p>{title}</p>
                {
                    !isArchived && !isDeleted && (
                        <button onClick={onPinClick} className="cursor-pointer">
                            <span className={isPinned ? "material-icons" : "material-icons-outlined"}>
                                push_pin
                            </span>
                        </button>
                    )
                }
                
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="flex gap-3 ml-auto">
                    {
                    !isDeleted && (
                    <button onClick={() => OnArchiveClick(id)} className="cursor-pointer">
                        <span className={isArchived ? "material-icons" : "material-icons-outlined"}>
                            archive
                        </span>
                    </button>
                    )
                    }
                    {
                        isDeleted && (
                            <button onClick={() => onRestoreClick(id)} className="cursor-pointer">
                                <span className="material-icons-outlined">
                                    restore
                                </span>
                            </button>
                        )
                    }
                    {
                        isDeleted && (
                            <button onClick={() => onDeleteForeverClick(id)} className="cursor-pointer">
                                <span className="material-icons-outlined">
                                    delete_forever
                                </span>
                            </button>
                        )
                    }
                    {
                    !isDeleted && (
                    <button onClick={() => onDeleteClick(id)} className="cursor-pointer">
                        <span className="material-icons-outlined">
                            delete
                        </span>
                    </button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}