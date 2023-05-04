import { Avatar, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        return logOut()
    }
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className='shadow-2xl shadow-blue-300 mb-1'
            >
                <Navbar.Brand href="/" className='lg:ms-14 w-32'>
                    <span className="self-center font-serif text-blue-900 whitespace-nowrap text-xl font-semibold dark:text-white">
                        AH Shef Recipe
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 lg:me-14">

                    {
                        user && <Tooltip
                            content={user?.displayName}
                            style="light"
                        >
                            <Avatar
                                img={user?.photoURL}
                                rounded={true}
                            />
                        </Tooltip>
                    }

                    {
                        user ? <Button onClick={handleLogout} className='mx-4' gradientMonochrome="failure">
                            Logout</Button> : <Link to={"/login"}>
                            <Button className='mx-4' gradientMonochrome="info">
                                Login
                            </Button>
                        </Link>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>

                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-violet-800 text-lg' : 'text-lg'}>Home</NavLink>
                    <NavLink to={"/blogs"} className={({ isActive }) => isActive ? 'text-violet-800 text-lg' : 'text-lg'}>Blogs</NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? 'text-violet-800 text-lg' : 'text-lg'}>About</NavLink>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;