import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
            
                <Link
                    className='logo-link'
                    to="/"
                >
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>Fisiovida</span>
                </Link>
                <div className='menu'>
                    <div className='links-paginas'>
                        <NavLink
                            to="/quienessomos"
                        >
                            Quiénes Somos
                        </NavLink>
                        <NavLink
                            to="/servicios"
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            to="/testimonios"
                        >
                            Testimonios
                        </NavLink>
                        <NavLink
                            to="/contacto"
                        >
                            Contacto
                        </NavLink>
                    </div>
                </div>
                <div className='informacion-contacto'>
                    <p>¡Llama ahora!</p>
                    <p className='telefono'>(669) 918 9927</p>
                </div>
            </nav>
        </header>
    )
}