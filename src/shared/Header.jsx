import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
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
                    <Button className='me-4'>
                        Login
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="">
                        Blog
                    </Navbar.Link>
                    <Navbar.Link href="">
                        About
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;