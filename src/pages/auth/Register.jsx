import React from 'react';
import { Button, Card, FileInput, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-1/3 mx-auto mt-12 mb-20'>
            <Card>
                <h1 className='text-center font-serif text-4xl font-bold text-blue-700'>Register</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="username"
                                value="Name"
                            />
                        </div>
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Your Name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@example.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="file"
                                value="Upload Photo"
                            />
                        </div>
                        <FileInput
                            id="file"
                            gradientMonochrome="info"
                        />
                    </div>
                    <Button type="submit" gradientMonochrome="info">
                        Register
                    </Button>
                    <p className='mt-2 text-right text-gray-600'>Already Register? click here <Link to={"/login"} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link></p>
                </form>
            </Card>
        </div>
    );
};

export default Register;