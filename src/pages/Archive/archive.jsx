import { Navbar } from "../../components/Navbar/navbar"
import { Sidebar } from "../../components/Sidebar/sidebar"
import { useNotes } from "../../context/notesContext"
import { NotesCard } from "../../components/NotesCard/notescard"

export const Archive = () => {
    const { notes } = useNotes();
    const archivedNotes = notes.filter(({isArchived, isDeleted}) => isArchived && !isDeleted);
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="mt-5">
                <div className="flex flex-wrap gap-4">
                    {
                        archivedNotes?.length > 0 && archivedNotes.map(({ title, text, id, isPinned, isArchived, isDeleted }) => (
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