import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurShefs = () => {
    const [chefs, setShefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setShefs(data))
    }, [])


    return (
        <>
            <h1 className='text-center text-5xl font-mono mt-14 uppercase'>Our Shef</h1>

            <div className='grid grid-cols-3 gap-8 container mx-auto py-14'>
                {
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
                                        <Button
                                            outline={true}
                                            gradientDuoTone="purpleToBlue"
                                        >
                                            <Link to={`/chef-recipes/${chef.id}`}>View Recipes</Link>
                                        </Button>
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