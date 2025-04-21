import React from 'react';
import Navbar from "./components/NavBar.tsx";
import AppRoutes from './routes/AppRoutes.tsx'



const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main>
                <AppRoutes/>
            </main>
        </>
    );
};
export default App;