import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            
            if (response.status === 200) {
                setSuccessMessage(response.data.message); 
                setError(null); 
                console.log('User:', response.data.user);
                
            
                navigate('/'); 
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Invalid password. Please try again.');
            } else if (err.response && err.response.status === 404) {
                setError('User not found.');
            } else {
                setError('Failed to sign in. Please check your credentials.');
            }
            setSuccessMessage(null);  
        }
    };

    return (
        <div className="container">
            <h2>Sign In</h2>
            {error && <p className="text-danger">{error}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
