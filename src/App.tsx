import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {Home} from "./page/Home";
import {Auth} from "./page/Auth";

export function App() {
    const navigate = useNavigate();

    useEffect(() => {
        let path = localStorage.getItem('path');
        if(path) {
            localStorage.removeItem('path');
            navigate(path);
        }

        console.log('test')
    }, []);

    return (
        <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/auth/instaget" element={<Auth />} />

                </Routes>
        </BrowserRouter>
    )
}