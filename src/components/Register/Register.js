import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [socialSignIn, setSocialSignIn] = useState(false);

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

                {/* Toggle Social Sign In  */}
                <label for="my-modal-6" class="btn btn-outline mx-5 modal-button">Social Sign In</label>

                <div class="card-body">

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
                {/* <!-- The button to open modal --> */}

                {/* <!-- Put this part before </body> tag --> */}

            </div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1 className='text-3xl font-bold mb-5 text-center'>Select a sign in option</h1>
                    <button class="text-lg btn btn-outline w-full mb-3 ">Google Sign In</button>
                    <button class="text-lg btn btn-outline w-full mb-3 ">Facebook Sign In</button>
                    <button class="text-lg btn btn-outline w-full">Github Sign In</button>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;