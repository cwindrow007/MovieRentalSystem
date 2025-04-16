const LoginPage = () => {
    return(
        <div>
            <h1>Movie Rentals</h1>
            <form>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br/><button type="submit">Login</button><br/>
                    <label>Forgot password?</label><br/>
                    <button type="button">Create account</button>
                </fieldset>

            </form>
        </div>
    );
};
export default LoginPage;