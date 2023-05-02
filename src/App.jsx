import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Header from './shared/Header';
import CustomFooter from './shared/CustomFooter';

function App() {

  return (
    <>
      <Header />

      <div className='flex justify-around items-center py-10 bg-white'>
        <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80" alt="" className="w-[40%] rounded-xl shadow-2xl" />
        <h1 className='text-indigo-700 font-bold font-sans text-start text-6xl'>Our Passion <br /> For Delicious <br /> Food</h1>
      </div>



      <h1 className='text-center text-5xl font-mono mt-14 uppercase'>Recipes By Category</h1>
      <div>
        <img src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/sweets_categ-400x500.jpg" alt="" className="w-1/5 rounded-xl" />
        <h1 className='font-mono'>Sweets</h1>
      </div>

      <CustomFooter />
    </>
  )
}

export default App
