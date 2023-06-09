import { Label } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { googleSignIn, githubSignIn, signInUser } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        form.reset()
        // user validation 
        if (email == '' || password == '') {
            return toast.error('Input fields can not be empty !')
        }

        if (password.length < 6) {
            return toast.error('Your password must be at least 6 characters')
        }

        signInUser(email, password).then(() => {
            Navigate(from, { replace: true })
        })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }
    // sign with Google authentication 
    const handleGoogleSignIn = () => {
        googleSignIn().then(() => {
            Navigate(from, { replace: true })
        })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }
    // sign with Github authentication
    const handleGithubSignIn = () => {
        githubSignIn().then(() => {
            Navigate(from, { replace: true })
        })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }

    return (
        <div className='w-1/3 mx-auto mt-12'>
            <div className='bg-white rounded-lg p-5'>
                <h1 className='text-center font-serif text-4xl font-bold text-blue-700'>Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Email"
                            />
                        </div>
                        <input type="email"
                            placeholder="name@example.com"
                            name="email"
                            id="email1"
                            // required
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input>

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Password"
                            />
                        </div>
                        <input type="password"
                            placeholder="name@example.com"
                            name="password"
                            id="password1"
                            // required
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input>
                    </div>
                    <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Login
                    </button>
                    <div className='mt-2 mb-6 text-right text-gray-600'>Not Register? click here <Link to={"/register"} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Registration</Link></div>
                </form>

                <div className='flex justify-between'>
                    <div>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            onClick={handleGoogleSignIn}
                        >
                            <span class="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <BsGoogle className='me-3'></BsGoogle>
                                <span>Sign in with Google</span>
                            </span>
                        </button>
                    </div>
                    <div>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                            onClick={handleGithubSignIn}
                        >
                            <span class="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <BsGithub className='me-3'></BsGithub>
                                <span>Sign in with Github</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;