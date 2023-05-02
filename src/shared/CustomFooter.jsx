import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from 'flowbite-react'

const CustomFooter = () => {
    return (
        <>
            <Footer className='border border-solid border-t-gray-300 py-10'>
                <div className="w-full mx-14">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="/"
                                // src=""
                                // alt="Flowbite Logo"
                                name="AH Shef Recipe"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Home
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Blog
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Copyright by AH Shaf"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-10 sm:mt-0 sm:justify-center">
                            <BsFacebook size={30} />
                            <BsInstagram size={30} />
                            <BsTwitter size={30} />
                            <BsGithub size={30} />
                            <BsDribbble size={30} />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    );
};

export default CustomFooter;