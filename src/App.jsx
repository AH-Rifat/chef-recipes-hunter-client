import { useState } from 'react'
import './App.css'
import Header from './shared/Header';
import CustomFooter from './shared/CustomFooter';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <CustomFooter />
    </>
  )
}

export default App
