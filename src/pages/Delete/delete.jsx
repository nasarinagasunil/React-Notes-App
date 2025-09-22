import { Navbar } from "../../components/Navbar/navbar"
import { Sidebar } from "../../components/Sidebar/sidebar"
import { useNotes } from "../../context/notesContext"
import { NotesCard } from "../../components/NotesCard/notescard"
export const Delete = () => {

    const { notes } = useNotes();
    const deletedNotes = notes.filter(note => note.isDeleted);

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="mt-5">
                    <div className="flex flex-wrap gap-4">
                        {
                            deletedNotes?.length > 0 && deletedNotes.map(({ title, text, id, isPinned, isArchived, isDeleted }) => (
                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isArchived={isArchived} isDeleted={isDeleted} />
                            )
                            )

                        }
                    </div>
                </div>
            </main>
        </>
    )
}