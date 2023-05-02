import { Button, Card } from 'flowbite-react';
import React from 'react';

const OurShefs = () => {
    return (
        <>
            <h1 className='text-center text-5xl font-mono mt-14 uppercase'>Our Shef</h1>
            <div>
                <div className="max-w-sm">
                    <Card imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                        <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Robart Maurs
                        </h5>
                        <div className="font-semibold flex justify-between text-gray-700 dark:text-gray-400">
                            <p>Experience: 2 years</p>
                            <p>Total Recipes: 5</p>
                        </div>
                        <div className="font-semibold flex justify-between text-gray-700 dark:text-gray-400">
                            <p>Likes: 1.5k</p>
                            <Button
                                outline={true}
                                gradientDuoTone="purpleToBlue"
                            >
                                View Recipes
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default OurShefs;