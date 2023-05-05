import React, { useContext, useState } from 'react';
import { FileInput, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
    const [file, setFile] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const storage = getStorage();

    const uploadFile = (username) => {
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    updateUserProfile(username, downloadURL).then(() => {

                    }).catch((error) => {
                        // An error occurred while updating the profile
                        console.error("Error updating profile:", error);
                    })
                });
            }
        );
    }

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        // const img = form.user_image.value

        // user validation 
        if (email == '' || password == '') {
            return toast.error('Input fields can not be empty !')
        }

        if (password.length < 6) {
            return toast.error('Your password must be at least 6 characters')
        }
        form.reset()

        createUser(email, password)
            .then((result) => {
                toast.success("Successfully Done")
                uploadFile(username)
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }

    return (
        <div className='w-1/3 mx-auto mt-12 mb-20'>
            <div className='bg-white rounded-lg p-5'>
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
                            onChange={(e) => setFile(e.target.files[0])}
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