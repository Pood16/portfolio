import {NavLink} from 'react-router'

export default function Header(){
    return(
        <header className="container mx-auto border-b border-[#455a64] flex space-x-0">
            <h1 
                
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 border-r border-[#455a64]  "text-[#b0bec5] hover:text-white min-w-[200px]`}
            >
                Ouirghane_Lahcen
            </h1>
            <nav className="flex">
                <NavLink 
                    to="/" 
                    className={({isActive}) => `px-6 py-3 text-sm font-medium transition-colors duration-200 border-r border-[#455a64] ${isActive ? "text-white border-b-2 border-b-[#ff9800]" : "text-[#b0bec5] hover:text-white hover:bg-[#263238]"}`}
                >
                    _hello
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={({isActive}) => `px-6 py-3 text-sm font-medium transition-colors duration-200 border-r border-[#455a64] ${isActive ? "text-white border-b-2 border-b-[#ff9800]" : "text-[#b0bec5] hover:text-white hover:bg-[#263238]"}`}
                >
                    _projects
                </NavLink>
            </nav>
            <NavLink 
                to="/contact" 
                className={({isActive}) => `px-6 py-3 text-sm font-medium transition-colors duration-200 ml-auto border-l border-[#455a64]  ${isActive ? "text-white border-b-2 border-b-[#ff9800]" : "text-[#b0bec5] hover:text-white hover:bg-[#263238]"}`}
            >
                _contact_me
            </NavLink>
        </header>
    )
}






