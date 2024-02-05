import React, { useState } from 'react';
import "./auth.css";
import loginImage from "../assets/login.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

const LoginComponent = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false);
    // const [logout, setLogout] = useState(false);
    const [hasLoginFailed, setHasLoginFailed] = useState(false);

    const navigate = useNavigate();
    const auth = useAuth();

    
    async function handleSubmit(event) {
        console.log(event)
        event.preventDefault();
        if (await auth.handleLogin(username, password)) {
            navigate('/books');
        }
        else {
            setHasLoginFailed(true);
        }
        
    }

    // create a message component to display the error message if login fails for 3 seconds
    const handleInvalidCredentials = () => {
        if (hasLoginFailed) {
            setTimeout(() => {
                setHasLoginFailed(false);
            }, 3000);
            return <p id='invalid' style={{ fontSize: '0.63em' ,color:'red' }}>Invalid username or password</p>
        }
    }

    return (
        <>
            <div className='grid justify-center '>
                <div className='mt-7 flex justify-center'>
                    <img src={loginImage} alt="login" className='w-1/3' />
                </div>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit} className='space-y-6 w-3/5 shadow-lg p-3'>
                        <div className='m-2 flex justify-center'>
                            <input placeholder='Enter your email' type="username" className='input-box p-1 w-full border-gray-400 border rounded-sm' name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='m-2 flex justify-center flex-col space-y-1'>
                            <input placeholder='Enter your password' type="password" className='input-box p-1 w-full border-gray-400 border rounded-sm' name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div>
                                {handleInvalidCredentials()}
                            </div>
                            
                        </div>
                        
                            
                        
                        <div className='m-2 flex justify-center'>
                            <button type="submit" className='bg-blue-800 hover:bg-blue-900 text-white p-2 w-full font-semibold text-sm rounded-sm'>
                                Continue
                            </button>
                        </div>
                        
                        <div className='flex justify-center'>
                            <p style={{ fontSize: '0.63em' }}>Note: If you haven't registered yet.<Link to="/users/create" className='text-blue-600'> Register now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;
