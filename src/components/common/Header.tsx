import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from '../UI/DropdownMenu';


export default function Header() {
    return (
        <>
            <header id="main-header">
                <div className='main-header__container'>

                    <h1 className='decorated-text header-title'>Feast Finder</h1>
                    <nav className='nav'>
                        <DropdownMenu side="right" button={<GiHamburgerMenu className="header__menu-icon" />}>

                            <p>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'link--active' : ''} end>Home</NavLink>
                            </p>
                            <p>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'link--active' : ''} end>Home</NavLink>
                            </p>
                            <p>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'link--active' : ''} end>Home</NavLink>
                            </p>
                        </DropdownMenu>

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
                </div>
            </header>
        </>
    );
}
