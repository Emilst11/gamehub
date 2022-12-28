import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Routings = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/detail/:title" exact element={<Detail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routings