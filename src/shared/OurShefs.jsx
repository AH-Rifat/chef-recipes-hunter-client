import { Button, Card, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurShefs = () => {
    const [chefs, setShefs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-ah-rifat.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setShefs(data)
            })
    }, [])


    return (
        <>
            <h1 className='text-center text-5xl font-mono mt-14 uppercase'>Our Shef</h1>

            <div className='grid grid-cols-1 mx-4 lg:grid-cols-3 gap-8 lg:container lg:mx-auto py-14'>
                {
                    loading ? <div className='text-right'><Spinner size="xl" /></div> :
                        chefs.map(chef => {
                            return (
                                <div key={chef.id} className="max-w-sm">
                                    <Card imgSrc={chef.image}>
                                        <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                            {chef.name}
                                        </h5>
                                        <div className="font-semibold flex justify-between text-gray-700 dark:text-gray-400">
                                            <p>Experience: {chef.experience}</p>
                                            <p>Total Recipes: {chef.numbersOfRecipes}</p>
                                        </div>
                                        <div className="font-semibold flex justify-between text-gray-700 dark:text-gray-400">
                                            <p>Likes: {chef.likes}</p>
                                            <Link to={`/chef-recipes/${chef.id}`}>
                                                <Button
                                                    outline={true}
                                                    gradientDuoTone="purpleToBlue"
                                                >
                                                    View Recipes
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                }
            </div>


        </>
    );
};

export default OurShefs;