//src/AppRoutes.tsx
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from "../pages/Home";
import Register from "../pages/Register.tsx";
import UserDashboardPage from "../pages/UserDashboardPage.tsx";
import UserRentals from "../pages/UserRentals.tsx";
import MovieDetails from "../pages/MovieDetails.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";



const AppRoutes = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path = "/" element = {<Login/>} />
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/movie-details" element = {<MovieDetails/>}/>
                    <Route path = "/register" element = {<Register/>}/>
                    <Route path = "/user-dashBoard" element = {<UserRentals/>}/>
                    <Route path = "/user-rentals" element = {<UserDashboardPage/>}/>
                    <Route path = '/forgot-password' element={<ForgotPassword/>}/>
                </Routes>
            </main>
        </>
    );
};
export default AppRoutes;