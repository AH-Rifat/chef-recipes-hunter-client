import { Avatar, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className='shadow-2xl shadow-blue-300 mb-1'
            >
                <Navbar.Brand href="/" className='ms-14'>
                    <span className="self-center font-serif text-blue-900 whitespace-nowrap text-xl font-semibold dark:text-white">
                        AH Shef Recipe
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 me-14">

                    {
                        user?.displayName && <Tooltip
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
                        user?.displayName ?
                            <a onClick={handleLogout}>
                                <Button className='mx-4' gradientMonochrome="info">
                                    Logout
                                </Button>
                            </a> : <Link to={"/login"}>
                                <Button className='mx-4' gradientMonochrome="info">
                                    Login
                                </Button>
                            </Link>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>

                    <Link to={"/"}>Home</Link>
                    <Link to={"/blogs"}>Blogs</Link>
                    <Link to={"/about"}>About</Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;