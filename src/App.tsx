import React, {PropsWithChildren, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {Home} from "./page/Home";
import {Auth} from "./page/Auth";

export function App() {
    return (
        <BrowserRouter>
            <AppShell>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/auth/instaget" element={<Auth />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    )
}

function AppShell({children}: PropsWithChildren) {
    const navigate = useNavigate();

    useEffect(() => {
        let path = localStorage.getItem('path');
        if(path) {
            localStorage.removeItem('path');
            navigate(path);
        }
    }, []);

    return (
        <div>{children}</div>
    )
}