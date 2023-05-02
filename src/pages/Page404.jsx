import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='bg-white text-center'>
            <Link to={'/'} className='relative top-14 text-lg font-bold'><span className='bg-red-500 text-white p-2 rounded-xl'>Go To Home</span></Link>
            <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg?w=740&t=st=1683026049~exp=1683026649~hmac=96c8a914965c5db793e0f34a8ce083f212efe4fd957179644c65aae8368df586"
             alt="" className="mx-auto w-1/2" />
        </div>
    );
};

export default Page404;