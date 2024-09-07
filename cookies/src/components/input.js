import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Input() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Create a cookie with the email as the key and value
        document.cookie = `email=${email}; path=/;`;
        // Redirect to home route
        navigate('/home');
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email:</label><br />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}
