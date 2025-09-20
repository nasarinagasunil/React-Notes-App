import { NavLink, } from 'react-router-dom'
export const Sidebar = () => {
    const getStyles = ({isActive}) => {
        return isActive ? "flex text-center gap-1 px-2 py-2 text-slate-100 bg-indigo-800 rounded-r-full" : 
        "flex text-center gap-1 px-2 py-2 text-slate-700 hover:text-slate-100 hover:bg-indigo-800 rounded-r-full";
    }
    return (
        <aside className='flex flex-col gap-6 p-3 w-[175px] border-r-2 border-gray-100 h-screen'>
            <NavLink className={getStyles} to="/">
                <span class="material-symbols-outlined">
                    home
                </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyles} to="/archive">
                <span class="material-symbols-outlined">
                    archive
                </span>
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyles} to="/important">
                <span class="material-symbols-outlined">
                    label_important
                </span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyles} to="/bin">
                <span class="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}