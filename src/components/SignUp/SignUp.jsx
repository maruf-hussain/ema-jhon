import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        if(password !== confirm){
            setError('Your Password did not Match');
            return;
        }
        else if(password.length < 6){
            setError('Must write your password 6 character or longer')
            return;
        }

    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>

        <form onSubmit={handleSignUp} className='form'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Your Email' required /><br />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Your Password' required />

            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" placeholder='Your Password' required />
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p style={{textAlign:'center'}}>Already have a account? <Link style={{textDecoration:'none'}} to="/login">Login</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;