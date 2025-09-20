import { Navbar } from "../../components/Navbar/navbar"
import { Sidebar } from "../../components/Sidebar/sidebar"
import { useReducer } from "react"
import { notesReducer } from "../../reducers/notesReducer"
import { NotesCard } from "../../components/NotesCard/notescard"


export const Home = () => {

    const initialState = {
        title: "",
        text: "",
        notes: []
    }
    const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState);
    const onTitleChange = (e) => {
        notesDispatch({ type: "TITLE", payload: e.target.value })
    }
    const onTextChange = (e) => {
        notesDispatch({ type: "TEXT", payload: e.target.value })
    }
    const onAddClick = () => {
        notesDispatch({ type: "ADD_NOTES" })
        notesDispatch({ type: "RESET" })
    }
    console.log(notes);
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div>
                    <div className="flex flex-col w-[300px] relative border rounded-md p-2 ml-100 mt-5">
                        <input value={title} onChange={onTitleChange} className="focus:outline-none"  placeholder="Enter Title here..." />
                        <textarea rows={3} value={text} onChange={onTextChange} className="focus:outline-none" placeholder="enter Text here..." />
                        <button disabled={title.length === 0} onClick={onAddClick} className="absolute bottom-0 right-0 cursor-pointer">
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-20">
                        {
                            notes.map(({ title, text, id }) => (
                                <NotesCard key={id} id={id} title={title} text={text}/>
                                )
                            )

                        }
                    </div>
                </div>
            </main>

        </>

    )
}