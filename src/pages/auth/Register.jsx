import React, { useContext, useState } from 'react';
import { Alert, FileInput, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const img = form.user_image.value

        // user validation 
        if (password.length < 6) {
            setError('Your password must be at least 6 characters')
        } else { setError('') }

        if (email == '' || password == '') {
            setError('Input fields can not be empty !')
        }
        form.reset()
        createUser(email, password)
            .then((result) => {
                toast.success("Successfully Done")
                const user = result.user
                updateUserProfile(user, username)
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <div className='w-1/3 mx-auto mt-12 mb-20'>
            <div className='bg-white rounded-lg p-5'>
                {
                    error && <Alert
                        color="failure"
                    >
                        {error}
                    </Alert>
                }

                <h1 className='text-center font-serif text-4xl font-bold text-blue-700'>Register</h1>
                <form onSubmit={handleRegistration} className="flex flex-col gap-4">
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
                            name="username"
                            placeholder="Your Name"
                        // required={true}
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
                            name="email"
                            placeholder="name@example.com"
                        // required={true}
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
                            name="password"
                        // required={true}
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
                            name='user_image'
                        />
                    </div>
                    <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Register
                    </button>
                    <div className='mt-2 text-right text-gray-600'>Already Register? click here <Link to={"/login"} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link></div>
                </form>
            </div>
        </div>
    );
};

export default Register;