import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1> Movie Rental System</h1>
                <ul >
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                    <li>
                        <Link to="/MovieDetails">Movie Details</Link>
                    </li>
                    <li>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/not-found">404 Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}