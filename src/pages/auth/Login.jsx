import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    return (
        <div className='w-1/3 mx-auto mt-12'>
            <Card>
                <h1 className='text-center font-serif text-4xl font-bold text-blue-700'>Login</h1>
                <form className="flex flex-col gap-4">
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
                    <Button type="submit" gradientMonochrome="info">
                        Login
                    </Button>
                    <p className='mt-2 mb-6 text-right text-gray-600'>Not Register? click here <Link to={"/register"} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Registration</Link></p>
                </form>

                <div className='flex justify-between'>
                    <div>
                        <Button
                            outline={true}
                            gradientDuoTone="greenToBlue"
                            onClick={() => googleSignIn()}
                        >
                            <BsGoogle className='me-3'></BsGoogle> Sign in with Google
                        </Button>
                    </div>
                    <div>
                        <Button
                            outline={true}
                            gradientDuoTone="purpleToPink"
                            onClick={() => githubSignIn()}
                        >
                            <BsGithub className='me-3'></BsGithub> Sign in with Github
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;