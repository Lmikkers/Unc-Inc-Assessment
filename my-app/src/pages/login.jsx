// src/pages/login.jsx
import logo from '../uncincLogo.svg';
import Navbar from '../components/navbar';

export function Login() {

    return (
        <section>
            <div>
                <img src={logo} alt="logo unc inc" />
                <h1>Welkom terug!</h1>
            </div>

            <article>
                <form action="">
                    <label for="username">Gebruikersnaam</label>
                    <input type="text" name="username" required id="username" placeholder="voer uw gebruikersnaam in" />

                    <label for="password">Wachtwoord</label>
                    <input type="password" name="password" required id="password" placeholder="voer uw wachtwoord in" />

                    <button type="submit" aria-label="login button">Login</button>
                </form>
            </article>

            <Navbar/>
        </section>
    )
}

export default Login;