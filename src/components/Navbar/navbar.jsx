import logo from '../../assets/notes-image.jpg'
export const Navbar = () =>{
    return(
        <header className="flex p-3 gap-3 border-b-2 border-gray-200">
            <div className='w-15 h-15'>
                <img className='w-full h-full' src={logo}/>
            </div>
            <div>
                <h1 className='text-indigo-800 text-5xl'>Notes App</h1>
            </div>
        </header>
    )
}