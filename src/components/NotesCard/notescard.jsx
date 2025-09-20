export const NotesCard = ({id, title, text}) =>{
    return(
        <div key={id} className="flex flex-col gap-3 p-4 w-64 border rounded-sm">
            <div className="flex justify-between">
                <p>{title}</p>
                <button>
                    <span class="material-symbols-outlined">
                        keep
                    </span>
                </button>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="flex gap-3 ml-auto">
                    <button>
                        <span class="material-symbols-outlined">
                            archive
                        </span>
                    </button>
                    <button>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}