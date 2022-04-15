import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-4'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-info d-block mx-auto w-50 my-4'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50 my-4'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50'>
                    <img src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;