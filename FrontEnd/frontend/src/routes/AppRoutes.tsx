//src/AppRoutes.tsx
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from "../pages/Home";
import Register from "../pages/Register.tsx";
import UserDashboardPage from "../pages/UserDashboardPage.tsx";
import UserRentals from "../pages/UserRentals.tsx";
import MovieDetails from "../pages/MovieDetails.tsx";



const AppRoutes = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path = "/" element = {<Login/>} />
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/moviedetails" element = {<MovieDetails/>}/>
                    <Route path = "/register" element = {<Register/>}/>
                    <Route path = "/userdashBoard" element = {<UserRentals/>}/>
                    <Route path = "/userrentals" element = {<UserDashboardPage/>}/>
                </Routes>
            </main>
        </>
    );
};
export default AppRoutes;