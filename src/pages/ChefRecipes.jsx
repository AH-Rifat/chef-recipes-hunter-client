import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../shared/Recipes';
import LazyLoad from 'react-lazy-load';
import { Spinner } from 'flowbite-react';

const ChefRecipes = () => {
    const { id, name, image, description, experience, numbersOfRecipes, likes, listOfRecipes } = useLoaderData()
    const [loading, setLoading] = useState(true)

    return (
        <div>
            {/* Chef Recipes page Banner */}
            {
                loading ? <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" size="xl" />
                </div> : ''
            }
            <LazyLoad threshold={1} onContentVisible={() => {
                setLoading(false)
            }}>
                <div className='bg-white rounded-xl container mx-auto py-14 my-10 flex'>
                    <img src={image} alt="" className="w-96 ring-2 ms-20 rounded-xl shadow-lg shadow-violet-500" />
                    <div className='ms-20 leading-10'>
                        <h1><span className='font-bold me-2'>Name:</span>{name}</h1>
                        <p><span className='font-bold me-2'>Bio:</span>{description}</p>
                        <p><span className='font-bold me-2'>Experience:</span>{experience}</p>
                        <p><span className='font-bold me-2'>Number of Recipes:</span>{numbersOfRecipes}</p>
                        <p><span className='font-bold me-2'>Likes:</span>{likes}</p>
                    </div>
                </div>
            </LazyLoad>

            <h1 className='text-center font-sans font-bold text-4xl my-14 text-violet-800 uppercase underline'>My Recipes</h1>
            <Recipes key={id} listOfRecipes={listOfRecipes}></Recipes>
        </div>
    );
};

export default ChefRecipes;