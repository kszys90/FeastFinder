import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="main-header">
                <h1>Feast Finder</h1>
                <nav>
                    <ul>
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
