import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../shared/Recipes';

const ChefRecipes = () => {
    const { id, name, image, description, experience, numbersOfRecipes, likes, listOfRecipes } = useLoaderData()

    return (
        <div>
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

            <h1 className='text-center font-sans font-bold text-4xl my-14 text-violet-800 uppercase underline'>My Recipes</h1>
            <Recipes key={id} listOfRecipes={listOfRecipes}></Recipes>
        </div>
    );
};

export default ChefRecipes;