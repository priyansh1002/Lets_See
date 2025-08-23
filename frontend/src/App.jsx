import React from 'react';
import {Routes ,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Footer from "./components/Footer";
import Home from "./pages/Home";


const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-gray-300 to-pink-50'>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
