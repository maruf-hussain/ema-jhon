import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form className='form'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Your Email' required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Your Password' required />
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p  style={{textAlign:'center'}}>Already have a account? <Link style={{textDecoration:'none', color:'red'}} to="/signup">Sign Up</Link></p>

        </div>
    );
};

export default Login;