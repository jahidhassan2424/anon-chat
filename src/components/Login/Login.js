import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import SocialLoginModal from '../Shared/SocialLoginModal';
const Login = () => {

    //open or close social login modal
    const [socialLoginModal, setSocialLoginModal] = useState(false)

    return (
        <div className='flex justify-center mt-20'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <h1 className='text-5xl font-bold text-center mb-5'>Please Login</h1>
                <figure><img src={logo} alt="Shoes" /></figure>
                <div class="card-body">
                    {/* Toggle Social Sign In  */}
                    <label onClick={() => setSocialLoginModal(true)} for="socialLoginModal" class="btn btn-outline modal-button">Social Sign In</label>
                    {/* Email Field */}
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text text-xl">Your Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input text-lg border-zinc-400 border-2  w-full " />
                    </div>

                    {/* Password Field */}
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text text-xl">Your Password</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input text-lg w-full border-zinc-400 border-2 " />
                    </div>
                    <div>

                        {/* Show password will be here */}
                    </div>
                    <div class="card-actions w-full">
                        <button class="btn btn-primary w-full mt-5">Buy Now</button>
                    </div>
                    <div>
                        <p className='text-lg'>Dont have an account? <Link to="/register" className='text-secondary font-bold'>Create an Account</Link></p>
                    </div>
                </div>
            </div>
            {
                socialLoginModal && <SocialLoginModal
                    setSocialLoginModal={setSocialLoginModal}
                ></SocialLoginModal>
            }
        </div>
    );
};

export default Login;