// src/pages/login.jsx

export function Login() {
    return (
        <section>
            <h1>Welkom terug</h1>

            <article>
                <form action="">
                    <label for="username">Gebruikersnaam</label>
                    <input type="text" name="username" id="username" placeholder="voer uw gebruikersnaam in" />

                    <label for="password">Wachtwoord</label>
                    <input type="password" name="password" id="password" placeholder="voer uw wachtwoord in" />

                    <button type="submit" aria-label="login button">Login</button>
                </form>
            </article>
        </section>
    )
}

export default Login;