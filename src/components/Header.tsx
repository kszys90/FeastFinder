import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="main-header">
                <h1 className='decorated-text header-title'>Feast Finder</h1>
                <nav >
                    <ul className="header__nav-list">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'link--active' : ''} end>Home</NavLink>
                        </li>
                        <li>
                            <p>2</p>
                        </li>
                        <li>
                            <p>3</p>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
