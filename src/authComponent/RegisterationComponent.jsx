import React, { useState } from 'react';
import "./auth.css";
import loginImage from "../assets/login.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

const RegisterationComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false);
    // const [logout, setLogout] = useState(false);
    const [hasLoginFailed, setHasLoginFailed] = useState(false);

    const navigate = useNavigate();
    const auth = useAuth();


    function handleSubmit(event) {
        event.preventDefault();
        navigate('/users/auth');
    }

    // create a message component to display the error message if login fails for 3 seconds
    const handleInvalidCredentials = () => {
        if (hasLoginFailed) {
            setTimeout(() => {
                setHasLoginFailed(false);
            }, 3000);
            return <p id='invalid' style={{ fontSize: '0.63em', color: 'red' }}>Invalid username or password</p>
        }
    }

    return (
        <>
            <div className='grid justify-center'>
                <div className='flex items-center h-screen'>
                    <form onSubmit={handleSubmit} className='space-y-2'>
                        <div className='text-center text-xl font-bold shadow-inner'>
                            <p id='account-paragraph'>Create your account</p>
                        </div>
                        <div className='shadow-xl p-2 space-y-5'>
                            <div className='m-2 flex justify-center'>
                                <input placeholder='Enter your email' type="username" className='input-box p-1 w-full border-gray-400 border rounded-sm' name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='m-2 flex justify-center flex-col space-y-1'>
                                <input placeholder='Set your password' type="password" className='input-box p-1 w-full border-gray-400 border rounded-sm' name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='m-2 flex justify-center'>
                                <button type="submit" className='bg-blue-800 hover:bg-blue-900 text-white p-2 w-full font-semibold text-sm rounded-sm'>
                                    Continue
                                </button>
                            </div>


                            <div className='flex justify-center'>
                                <p style={{ fontSize: '0.63em' }} className='font-semibold'>Note: Already have an account?<Link to="/auth/login" className='text-blue-600'> Login</Link></p>
                            </div>
                        </div>
                        <div className='m-2 flex justify-center'>
                            <p style={{ fontSize: '0.63em' }} className='font-semibold text-center'>Or</p>
                        </div>
                        <div className='m-2 flex justify-center'>
                            <a href="" className='border-gray border bg-green-700 hover:bg-green-900 text-white p-2 w-full text-center rounded-sm text-sm'>Continue with Google</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterationComponent;
