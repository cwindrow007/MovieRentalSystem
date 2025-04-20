import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/LoginPage';
import Home from "./pages/Home";
import Register from"./pages/Regsiter.tsx";
import UserDashboardPage from "./pages/UserDashboardPage.tsx";
import UserRentals from "./pages/UserRentals.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import Navbar from "./components/NavBar.tsx";



const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Routes>
                    <Route path = "/" element = {<Login/>} />
                    <Route path = "/Home" element = {<Home/>}/>
                    <Route path = "/MovieDetails" element = {<MovieDetails/>}/>
                    <Route path = "/Register" element = {<Register/>}/>
                    <Route path = "/UserDashBoard" element = {<UserRentals/>}/>
                    <Route path = "/UserRentals" element = {<UserDashboardPage/>}/>
                </Routes>
            </main>
        </>
    );
};
export default App;