import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import ViewImage from "./ViewImage";

function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} exact />
                <Route path="/image/:id" element={<ViewImage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;