import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

const Recipes = ({ id, listOfRecipes }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isFavorite1, setIsFavorite1] = useState(false)
    const [isFavorite2, setIsFavorite2] = useState(false)

    const handleFavoriteBtn = () => {
        return toast('Your Favorite Recipes has been selected')
    }

    return (
        <div className='grid grid-cols-3 my-10 container gap-10 mx-auto'>

            <div className="w-full">
                <Card>
                    <img src={listOfRecipes[0].image_url} alt="" className="h-64" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {listOfRecipes[0].recipeName}
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <h1 className='font-bold mb-2 underline'>Ingredients:</h1>

                        {listOfRecipes[0].Ingredients.map(ingredient => {
                            return (<ul key={ingredient} class="w-80 mb-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{ingredient}</li>
                            </ul>)
                        })}

                        <h1 className='font-bold mb-2 mt-10 underline'>Cooking Method:</h1>
                        {listOfRecipes[0].cookingMethod}
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <div>
                            ratting
                        </div>
                        <Button
                            onClick={() => handleFavoriteBtn("one")}
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                            size="xs"
                            disabled={isFavorite}
                        >
                            <FaHeart className='me-2'></FaHeart>  Favorite
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="w-full">
                <Card>
                    <img src={listOfRecipes[1].image_url} alt="" className="h-64" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {listOfRecipes[1].recipeName}
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <h1 className='font-bold mb-2 underline'>Ingredients:</h1>

                        {listOfRecipes[1].Ingredients.map(ingredient => {
                            return (<ul class="w-80 mb-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{ingredient}</li>
                            </ul>)
                        })}

                        <h1 className='font-bold mb-2 mt-10 underline'>Cooking Method:</h1>
                        {listOfRecipes[1].cookingMethod}
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <div>
                            ratting
                        </div>
                        <Button
                            onClick={() => handleFavoriteBtn("two")}
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                            size="xs"
                            disabled={isFavorite1}
                        >
                            <FaHeart className='me-2'></FaHeart>  Favorite
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="w-full">
                <Card>
                    <img src={listOfRecipes[2].image_url} alt="" className="h-64" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {listOfRecipes[2].recipeName}
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <h1 className='font-bold mb-2 underline'>Ingredients:</h1>

                        {listOfRecipes[2].Ingredients.map(ingredient => {
                            return (<ul class="w-80 mb-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{ingredient}</li>
                            </ul>)
                        })}

                        <h1 className='font-bold mb-2 mt-10 underline'>Cooking Method:</h1>
                        {listOfRecipes[2].cookingMethod}
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <div>
                            ratting
                        </div>
                        <Button
                            onClick={() => handleFavoriteBtn(setIsFavorite2(true))}
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                            size="xs"
                            disabled={isFavorite2}
                        >
                            <FaHeart className='me-2'></FaHeart>  Favorite
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Recipes;