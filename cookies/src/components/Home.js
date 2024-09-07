import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    // Function to get email from the cookie
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const email = getCookie('email');

    const handleLogout = () => {
        // Clear the cookie
        document.cookie = 'email=; Max-Age=0; path=/;';
        // Redirect back to login
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome {email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
