import React from 'react';
import { Button } from 'flowbite-react';
import OurShefs from '../shared/OurShefs';

const Home = () => {
    return (
        <>
            {/* banner section */}
            <div className='lg:flex py-10 bg-white'>
                <div className='mx-20 lg:ms-72'>
                    <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80" alt="" className="w-80 rounded-xl shadow-2xl" />
                </div>
                <h1 className='text-indigo-700 font-bold text-center font-sans text-5xl lg:text-6xl lg:w-fit'>Our Passion <br /> For Delicious <br /> Food</h1>
            </div>

            {/* First extra section */}
            <h1 className='text-center text-5xl font-mono mt-14 uppercase'>Recipes By Category</h1>
            <p className='text-center font-mono text-gray-600'>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia <br /> deserunmollit anim id est laborum.</p>
            <div className='flex flex-col gap-6 md:flex-row py-10 ms-14 md:mx-36'>
                <div className='relative'>
                    <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/sweets_categ-400x500.jpg" alt="" className="w-10/12 rounded-xl" />
                    <h1 className='font-mono absolute bottom-5 left-[5.5rem] md:left-14 text-4xl font-bold text-red-700'>Sweets</h1>
                </div>
                <div className='relative'>
                    <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/burger_categ-400x500.jpg" alt="" className="w-10/12 rounded-xl" />
                    <h1 className='font-mono absolute bottom-5 left-20 md:left-12 text-4xl font-bold text-red-700'>Burgers</h1>
                </div>
                <div className='relative'>
                    <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/drinks_categ-400x500.jpg" alt="" className="w-10/12 rounded-xl" />
                    <h1 className='font-mono absolute bottom-2 left-24 md:left-14 text-4xl font-bold text-red-700'>Drinks</h1>
                </div>
                <div className='relative'>
                    <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/pizza_categ-400x500.jpg" alt="" className="w-10/12 rounded-xl" />
                    <h1 className='font-mono absolute bottom-5 left-24 md:left-14 text-4xl font-bold text-red-700'>Pizzas</h1>
                </div>
            </div>
            {/* Second extra section */}
            <div className='relative'>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/08/20/file7h5h2m0my9d1idq08p75-1021903-1629480873.jpg?itok=vlvYhzlU" alt="" className="w-full h-[38rem] py-14" />
                <div className='absolute top-52 md:top-64 left-20'>
                    <h1 className='font-serif text-4xl text-white'>Subscribe to our Newsletter</h1>
                    <p className='text-white mt-4'>Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed <br /> erosat orci congue vestibulum.</p>
                    <Button
                        color="success"
                        pill={true}
                        className='mt-4 w-40'
                    >
                        <span className='text-xl uppercase'>Subscribe</span>
                    </Button>
                </div>
            </div>

            {/* Our Shefs Section */}
            <OurShefs />
        </>
    );
};

export default Home;