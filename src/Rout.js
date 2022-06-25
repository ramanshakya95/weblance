import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
// import Error from './pages/Error';

const Rout = () => {
    return (
        <>
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                {/* <Route path="*" element={<Error/>}></Route> */}
            </Routes>
        </>
    );
};

export default Rout;