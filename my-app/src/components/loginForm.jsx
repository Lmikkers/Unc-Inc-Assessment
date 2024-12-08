import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function LoginForm({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'uncinc' && password === 'letmein') {
            login(username, password);
            setIsLoggedIn(true); // Zet de status op ingelogd
        } else {
            alert('Verkeerde gegevens');
        }
    };

    // Redirect naar dashboard als de gebruiker is ingelogd
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Uitloggen</button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        placeholder="Gebruikersnaam"
                        required
                    />
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Wachtwoord"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}
