import { Navbar } from "../../components/Navbar/navbar"
import { Sidebar } from "../../components/Sidebar/sidebar"
import { NotesCard } from "../../components/NotesCard/notescard"
import { useNotes } from "../../context/notesContext"


export const Home = () => {
    const { title, text, notes, notesDispatch } = useNotes();

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

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="w-screen flex flex-col gap-10" >
                    <div className="flex flex-col w-[400px] relative border rounded-md p-1 mt-5 self-center">
                        <input value={title} onChange={onTitleChange} className="focus:outline-none" placeholder="Enter Title here..." />
                        <textarea rows={3} value={text} onChange={onTextChange} className="focus:outline-none h-[100px]" placeholder="enter Text here..." />
                        <button disabled={title.length === 0} onClick={onAddClick} className="absolute bottom-0 right-0 cursor-pointer bg-indigo-100 rounded-[100%]">
                            <span className="material-icons">
                                add
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-5 ml-10">
                        {
                            pinnedNotes?.length > 0 && (
                                <div>
                                    <h1 className="pb-1">Pinned Notes</h1>
                                    <div className="flex flex-wrap gap-4">
                                        {
                                            pinnedNotes?.length > 0 && pinnedNotes.map(({ title, text, id, isPinned }) => (
                                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                            )
                                            )

                                        }
                                    </div>
                                </div>
                            )

                        }
                        <div>
                            {
                                pinnedNotes?.length > 0 && <h1 className="pb-1">Other Notes</h1>
                            }
                            <div className="flex flex-wrap gap-4">
                                {
                                    otherNotes?.length > 0 && otherNotes.map(({ title, text, id, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    )
                                    )

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>

    )
}