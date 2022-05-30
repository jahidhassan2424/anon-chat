import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleLogo from '../../images/google-brands.svg';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import SocialLoginModal from '../Shared/SocialLoginModal';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [socialSignIn, setSocialSignIn] = useState(false);


    //Open and close modal
    const [socialLoginModal, setSocialLoginModal] = useState(false)

    //Create account with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = data => {

    };
    return (
        <div className='flex justify-center mt-20'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <h1 className='text-5xl font-bold text-center mb-5'>Register</h1>
                <figure><img src={logo} alt="Shoes" /></figure>


                <div class="card-body">
                    {/* Toggle Social Sign In  */}
                    <label onClick={() => setSocialLoginModal(true)} for="socialLoginModal" class="btn btn-outline modal-button">Social Sign In</label>

                    {/* Name Field */}
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text text-xl">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" class="input text-lg border-zinc-400 border-2  w-full " {...register("name")} />
                    </div>

                    {/* Email Field */}
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text text-xl">Your Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input text-lg border-zinc-400 border-2  w-full "
                            {...register("email")}
                        />
                    </div>

                    {/* Password Field */}
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text text-xl">Your Password</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input text-lg w-full border-zinc-400 border-2 "
                            {...register("password")}
                        />
                    </div>
                    <div class="card-actions w-full">
                        <button type='submit' class="btn btn-primary w-full mt-5">Buy Now</button>
                    </div>
                    <div>
                        <p className='text-lg'>Already have an Account? <Link to="/login" className='text-secondary font-bold'>Login</Link></p>
                    </div>
                    <div class="divider">OR</div>
                </div>

            </div>

            {
                socialLoginModal && <SocialLoginModal
                    setSocialLoginModal={setSocialLoginModal}
                ></SocialLoginModal>
            }
        </div >
    );
};

export default Login;