import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const user = useContext(AuthContext)
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
                    <Button className='me-4' gradientMonochrome="info">
                        {
                            user.name ? <Link to={"/login"}>Logout</Link> : <Link to={"/login"}>Login</Link>
                        }

                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        <Link to={"/"}>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link href="">
                        <Link to={"/blogs"}>Blogs</Link>
                    </Navbar.Link>
                    <Navbar.Link href="">
                        <Link to={"/about"}>About</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;