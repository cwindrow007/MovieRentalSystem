//src/AppRoutes.tsx
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from "../pages/Home";
import Register from "../pages/Register.tsx";
import UserDashboardPage from "../pages/UserDashboardPage.tsx";
import UserRentals from "../pages/UserRentals.tsx";
import MovieDetails from "../pages/MovieDetails.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import PrivateRoutes from "../components/PrivateRoutes.tsx";
import Admin from "../pages/AdminDashboard.tsx";



const AppRoutes = () => {
    return (
            <main>
                <Routes>
                    <Route path = "/" element = {<Login/>} />
                    <Route path = "/register" element = {<Register/>}/>
                    <Route path = '/forgot-password' element={<ForgotPassword/>}/>

                    {/*Private Routes*/}
                    <Route
                        path="/home"
                        element={

                                <Home />
                        }
                    />
                    <Route
                        path="/movie-details"
                        element={
                            <PrivateRoutes>
                                <MovieDetails />
                            </PrivateRoutes>
                        }
                    />
                    <Route
                        path="/user-dashboard"
                        element={
                            <PrivateRoutes>
                                <UserDashboardPage />
                            </PrivateRoutes>
                        }
                    />
                    <Route
                        path="/user-rentals"
                        element={
                            <PrivateRoutes>
                                <UserRentals />
                            </PrivateRoutes>
                        }
                    />
                    <Route path = "/Admin" element = {<Admin/>} />
                </Routes>
            </main>
            );
            };
export default AppRoutes;