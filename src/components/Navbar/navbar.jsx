import logo from '../../assets/notes-image.jpg'
export const Navbar = () =>{
    return(
        <header className="flex px-2 py-2 gap-2 border-b-2 border-gray-100">
            <div className='w-15 h-15'>
                <img className='w-full h-full' src={logo}/>
            </div>
            <div>
                <h1 className='text-indigo-800 text-4xl font-bold'>Notes App</h1>
            </div>
        </header>
    )
}