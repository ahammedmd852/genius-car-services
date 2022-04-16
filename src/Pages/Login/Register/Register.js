import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='register-form'>
            <h1 className='form-title'>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Condition of Genius Car Service</label>
                <input disabled={!agree} type="submit" className='register-btn text-white w-25 mt-2' value="Register" />
            </form>
            <p className='mt-2'>Already have an Account? <Link to="/login" onClick={navigateLogin} className='text-primary text-decoration-none pe-auto'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;