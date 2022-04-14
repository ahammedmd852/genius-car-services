import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h1 className='form-title'>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" className='register-btn text-white' value="Register" />
            </form>
            <p className='mt-2'>Already have an Account? <Link to="/login" onClick={navigateLogin} className='text-danger text-decoration-none pe-auto'>Please Login</Link></p>
        </div>
    );
};

export default Register;