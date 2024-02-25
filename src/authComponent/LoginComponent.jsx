import React, { useState } from 'react';
import "./auth.css";
import loginImage from "../assets/login.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';
import NavBar from '../components/NavBar';

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
            return <p id='invalid' style={{ fontSize: '0.63em', padding: '2px' }}>Invalid username or password</p>
        }
    }

    return (
        <>
            <div>
                <div className='mb-7'>
                    <NavBar />
                </div>

                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit} className='space-y-6 w-2/5-md m-2 p-3 rounded-md' id='form'>
                        <div className='text-center'>
                            <p id='account-paragraph' >Log in to BookCenter</p>
                        </div>
                        <div className='relative flex justify-center'>
                            <div className='absolute bg-red-600 px-3'>
                                {handleInvalidCredentials()}
                            </div>
                        </div>

                        <div className='m-2 flex justify-center'>
                            <input placeholder='Email or username' type="username" className='input-box  px-3 py-2 w-4/5  rounded-sm' name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='m-2 flex justify-center space-y-1'>
                            <input placeholder='Password' type="password" className='input-box  px-3 w-4/5 py-2  rounded-sm' name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>


                        <div className='m-2 flex justify-center'>
                            <button type="submit" className=' text-black p-2 w-4/5 font-semibold text-sm rounded-sm' id='continue-button'>
                                Log In
                            </button>
                        </div>

                        <div className='flex justify-center'>
                            <Link to="/users/create" className='text-white text-xs font-semibold underline'>Forgot your password?</Link>
                        </div>

                        <div className='flex justify-center'>
                            <p className='border border-t-black opacity-10 w-3/4'></p>
                        </div>

                        <div >
                            <div className='m-2 flex justify-center'>
                                <a href="" className='border-gray border font-bold  text-white p-2 w-4/5 text-center rounded-3xl text-sm'>Continue with Google</a>
                            </div>
                            <div className='m-2 flex justify-center'>
                                <a href="" className='border-gray border font-bold text-white p-2 w-4/5 text-center rounded-3xl text-sm'>Continue with Facebook</a>
                            </div>
                            <div className='m-2 flex justify-center'>
                                <a href="" className='border-gray border font-bold  text-white p-2 w-4/5 text-center rounded-3xl text-sm'>Continue with phone number</a>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <p className='border border-t-black opacity-10 w-3/4'></p>
                        </div>

                        <div className='flex justify-center'>
                            <p style={{ fontSize: '0.73em' }} className='font-semibold opacity-60'>Note: If you haven't registered yet.<Link to="/users/create" className='text-white underline'> Register now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default LoginComponent;
